import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import initModel from "./init";


const contextualizeQSystemPrompt = `
  You are an AI assistant who is an expert at adding context to questions.
  You will be given a chat history with a final user question.
  Your job is to add context to that question, using the chat history, so that the question makes sense standalone.
  You should also provide a list of synonymous semantic keywords for that question after the question to improve vector searching.
  Do NOT answer the question. Your job is only to rephrase the question to add context.
  If the question already makes sense in isolation, do not rephrase the question.
`

const contextualizeQPrompt = ChatPromptTemplate.fromMessages([
  ["system", contextualizeQSystemPrompt],
  new MessagesPlaceholder("chat_history"),
  ["human", "{question}"],
]);

export const contextualizeQChain = contextualizeQPrompt
  .pipe(initModel())
  .pipe(new StringOutputParser());