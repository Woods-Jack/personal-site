import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { MESSAGE_TYPE } from "@/components/JackGPT/JackGPT.types";
import { buildChatHistory, removeSysMessages } from "@/utils/messageUtils";
import { ragChain } from "@/services/langchain/ragChain";

const messageSchema = z.object({
  type: z.nativeEnum(MESSAGE_TYPE),
  content: z.string(),
});

const chatSchema = z.object({
  history: z.array(messageSchema),
  userInput: z.string(),
  mockResponse: z.boolean().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userInput, history, mockResponse } = chatSchema.parse(body);
    const historyWithoutSysMessages = removeSysMessages(history);
    const formattedHistory = buildChatHistory(
      historyWithoutSysMessages.slice(-4)
    );

    const res = mockResponse
    ? await new Promise((resolve) => {
      setTimeout(
        () => resolve({
          kwargs: {
            content: "This is a mocked chat response",
          },
        }),
        3000
      );
    })
      : await ragChain.invoke({
          question: userInput,
          chat_history: formattedHistory,
        });

    return NextResponse.json(res);
  } catch (e: any) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.errors }, { status: 400 });
    }

    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
