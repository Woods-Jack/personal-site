import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { HumanMessage } from "@langchain/core/messages";
import { MESSAGE_TYPE } from "@/components/JackGPT/JackGPT.types";
import { buildChatHistory, removeSysMessages } from "@/utils/messageUtils";
import { contextualizeQChain } from "@/services/langchain/contextualisedQuestionChain";
import initModel from "@/services/langchain/init";
import { conversationalQAChain } from "@/services/langchain/conversationalQAChain";


const messageSchema = z.object({
  type: z.nativeEnum(MESSAGE_TYPE),
  content: z.string(),
});

const chatSchema = z.object({
  history: z.array(messageSchema),
  userInput: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userInput, history } = chatSchema.parse(body);
    const historyWithoutSysMessages = removeSysMessages(history);
    const formattedHistory = buildChatHistory(historyWithoutSysMessages);

    if (historyWithoutSysMessages.length > 0) {
     
      // if (formattedHistory) {
      //   refinedQuestion = await contextualizeQChain.invoke({
      //     chat_history: formattedHistory,
      //     question: userInput,
      //   });

        
      }

    
    const res = await conversationalQAChain.invoke({ question: userInput, chat_history: formattedHistory })
    
    return NextResponse.json(res);
  } catch (e: any) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.errors }, { status: 400 });
    }

    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
