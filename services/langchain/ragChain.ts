import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";
import initModel from "./init";
import { formatDocumentsAsString } from "langchain/util/document";
import { contextualizeQChain } from "./contextualisedQuestionChain";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import initPineconeIndex from "../pinecone/init";

const qaSystemPrompt = `You are an AI assistant who is an expert in answering questions about Jack Woods.
Jack is a software engineer currently working at Publicis Sapient in London.
Your job is to respond to a user's question about Jack using the information provided below.
If you don't know the answer, just say that you don't know. Do not make up the answer.
You should only answer questions about Jack. Do NOT answer any questions not relevant to Jack.
If someone asks an irrelevant question, let them know that you can only answer questions about Jack.
Use three sentences maximum and keep the answer concise.

{context}`;

const qaPrompt = ChatPromptTemplate.fromMessages([
  ["system", qaSystemPrompt],
  new MessagesPlaceholder("chat_history"),
  ["human", "{question}"],
]);

const vectorStore = await PineconeStore.fromExistingIndex(
  new OpenAIEmbeddings(),
  {
    pineconeIndex: initPineconeIndex(),
    filter: {
      $and: [
        { "Header 1": { $exists: true } },
        {
          $or: [
            { "Header 2": { $exists: true } },
            { "Header 3": { $exists: true } },
          ],
        },
      ],
    },
  }
);
const retriever = vectorStore.asRetriever();

export const ragChain = RunnableSequence.from([
  RunnablePassthrough.assign({
    context: contextualizeQChain.pipe(retriever).pipe(formatDocumentsAsString),
  }),
  qaPrompt,
  initModel(),
]);
