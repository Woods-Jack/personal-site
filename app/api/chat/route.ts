import { HumanMessage } from "@langchain/core/messages";
import initModel from "@/services/langchain/init";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body ?? "";

    const model = initModel();

    const res = await model.invoke([new HumanMessage({ content: message })]);

    return NextResponse.json(res);
  } catch(e: any) {
    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 })
  }
}