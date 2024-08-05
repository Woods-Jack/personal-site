import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import initModel from "./init";

const qaSystemPrompt = `You are an assistant for question-answering tasks.
If you don't know the answer, just say that you don't know.
Use three sentences maximum and keep the answer concise.`;

const qaPrompt = ChatPromptTemplate.fromMessages([
  ["system", qaSystemPrompt],
  new MessagesPlaceholder("chat_history"),
  ["human", "{question}"],
]);

export const conversationalQAChain = RunnableSequence.from([
  qaPrompt,
  initModel(),
]);
