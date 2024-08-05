import { ChatOpenAI } from "@langchain/openai";

const initModel = () => (
  new ChatOpenAI({
    model: "gpt-4",
    temperature: 0,
  }));

export default initModel;
