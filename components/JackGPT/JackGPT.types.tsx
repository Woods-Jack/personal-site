/* eslint-disable no-unused-vars */
export enum MESSAGE_TYPE {
  HUMAN = "human",
  CHATBOT = "chatbot",
  SYS = "system",
}

export interface IMessage {
  type: MESSAGE_TYPE;
  content: string;
} 