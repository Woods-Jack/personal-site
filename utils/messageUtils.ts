import { IMessage, MESSAGE_TYPE } from "@/components/JackGPT/JackGPT.types";
import { AIMessage, HumanMessage } from "@langchain/core/messages";

export const buildChatHistory = (history: IMessage[]) => {
  return history.map((msg) => {
    if (msg.type === MESSAGE_TYPE.HUMAN) {
      return new HumanMessage(msg.content);
    } else if (msg.type === MESSAGE_TYPE.CHATBOT) {
      return new AIMessage(msg.content);
    }
  });
};

export const removeSysMessages = (history: IMessage[]) => {
  return history.filter((messages) => messages.type !== MESSAGE_TYPE.SYS);
};
