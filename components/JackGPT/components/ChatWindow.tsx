import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import MessageContainer from "./MessageContainer";
import { INIT_MESSAGE, MESSAGE_TYPE } from "@/constants/jack-gpt";
import { useRef, useState } from "react";

interface IChatWindow {
    closeChatCb: (_state: boolean) => void;
}

export interface IMessage {
    type: MESSAGE_TYPE;
    content: string;
}



const ChatWindow = ({ closeChatCb }: IChatWindow) => {
    const [messages, setMessages] = useState<IMessage[]>([{ type: 'chatbot', content: INIT_MESSAGE}]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getChatbotResponse = async (msg: string) => {
        const res = await fetch('/api/chat', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: msg }),
        });
        const json = await res.json();
    
        if (res.ok) {
            console.log('json', json);
            messages.pop(); 
            setMessages((currentMessages) => {
                const updatedMessages: IMessage[] = [...currentMessages];
                updatedMessages.pop();
                return [...updatedMessages, { type: 'chatbot', content: json.kwargs.content }];
            });
        } else {
            console.log('error', json);
        }
    };

    const addMsgOnEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && inputRef.current?.value) {
            e.preventDefault();
            const newMsg = inputRef.current?.value;
            setMessages((currentMessages) => [...currentMessages, { type: 'human', content: newMsg }]);
            inputRef.current.value = "";
            setIsLoading(true);
            setMessages((currentMessages) => [...currentMessages, { type: 'chatbot', content: '...' }]);
            getChatbotResponse(newMsg);
            setIsLoading(false);
        }
    };

    const inputRef = useRef<HTMLTextAreaElement>(null);

    return (
        <div className="flex flex-col">
            <div className="bg-dark-sec light-text py-1 px-4 rounded-t-2xl flex flex-row justify-between items-center">
                <div>JackGPT</div>
                <button onClick={() => closeChatCb(false)}>
                    <FontAwesomeIcon icon={faXmark as IconProp} width={24} />
                </button>
            </div>
            <MessageContainer messages={messages} />
            <textarea disabled={isLoading} ref={inputRef} onKeyDown={addMsgOnEnter} className="w-full disabled:bg-white p-2 resize-none h-12 border-[1px] border-gray-400" placeholder={isLoading ? "Waiting for response..." : "Type your question here..."} />
        </div>
    )
}

export default ChatWindow;