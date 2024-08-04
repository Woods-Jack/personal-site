import { MESSAGE_TYPE } from "@/constants/jack-gpt";
import { useEffect, useRef, useState } from "react";
import { IMessage } from "./ChatWindow";

interface IMessageContainer {
    messages: IMessage[];
}

const MessageContainer = ({messages}: IMessageContainer) => {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages]);
    
    return(
        <div className="h-96 bg-white border-gray-400 md:border-x-[1px] flex flex-col overflow-y-scroll" ref={containerRef}>
            {messages.map((msg, i) => (
                <div key={`msg-${i}`} className={`w-max max-w-xs rounded-lg m-2 p-1 text-base ${msg.type === "chatbot" ? 'self-start bg-light-sec' : 'self-end bg-light'}`}>{msg.content}</div>
            ))}
        </div>
    )
}

export default MessageContainer;