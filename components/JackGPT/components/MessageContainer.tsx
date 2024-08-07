import { MESSAGE_TYPE, IMessage } from "../JackGPT.types";
import { useEffect, useRef } from "react";
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
                <div key={`msg-${i}`} className={`w-max max-w-xs rounded-lg m-2 p-2 text-base ${msg.type === MESSAGE_TYPE.SYS || msg.type === MESSAGE_TYPE.CHATBOT ? 'self-start bg-light-sec' : 'self-end bg-light'}`}>{msg.content}</div>
            ))}
        </div>
    )
}

export default MessageContainer;