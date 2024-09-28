"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import MessageContainer from "./MessageContainer";
import { INIT_MESSAGE } from "@/constants/jack-gpt";
import {  useEffect, useRef, useState } from "react";
import { IMessage, MESSAGE_TYPE } from "../JackGPT.types";

interface IChatWindow {
  closeChatCb: (_state: boolean) => void;
}

const ChatWindow = ({ closeChatCb }: IChatWindow) => {
  const [messages, setMessages] = useState<IMessage[]>([
    { type: MESSAGE_TYPE.SYS, content: INIT_MESSAGE },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const appendResponseMsg = (isError: boolean, content: string) => {
    setMessages((currentMessages) => {
      const updatedMessages: IMessage[] = [...currentMessages];
      updatedMessages.pop();
      return [
        ...updatedMessages,
        { type: isError ? MESSAGE_TYPE.SYS : MESSAGE_TYPE.CHATBOT, content: content },
      ];
    });
  }

  const getChatbotResponse = async (userInput: string) => {
    const messageHistory: IMessage[] = [...messages];
    setMessages((currentMessages) => {
      return ([
        ...currentMessages,
        { type: MESSAGE_TYPE.HUMAN, content: userInput },
        { type: MESSAGE_TYPE.SYS, content: "..." },
      ])
    });
    console.log('ABOUT TO CALL API WITH', userInput)
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput: userInput, history: messageHistory }),
    });
    const json = await res.json();
    console.log("I get response ", json)
    if (res.ok) {
      appendResponseMsg(false, json.kwargs.content);
    } else {
      appendResponseMsg(true, `ERROR: ${json.error}`);
    }
  };

  const addMsgOnEnter = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && inputRef.current?.value) {
      e.preventDefault();
      const newMsg = inputRef.current?.value;
      setIsLoading(true);
      inputRef.current.value = "";
      await getChatbotResponse(newMsg);
      setIsLoading(false);
    }
  };

  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Once the application has finished loading, re-focus on the input field
  useEffect(() => {
    if(!isLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col">
      <div className="bg-[#175873] light-text py-1 px-4 rounded-t-2xl flex flex-row justify-between items-center">
        <div>JackGPT</div>
        <button onClick={() => closeChatCb(false)}>
          <FontAwesomeIcon icon={faXmark as IconProp} width={24} />
        </button>
      </div>
      <MessageContainer messages={messages} />
      <textarea
        disabled={isLoading}
        ref={inputRef}
        onKeyDown={addMsgOnEnter}
        className="w-full text-black disabled:bg-white p-2 resize-none h-12 border-[1px] border-gray-400"
        placeholder={
          isLoading ? "Waiting for response..." : "Type your question here..."
        }
      />
    </div>
  );
};

export default ChatWindow;
