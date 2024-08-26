'use client'

import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import EntryPoint from "./components/EntryPoint";

const JackGPT = () => {
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
    return (
        <div className="fixed bottom-0 md:right-0 md:m-8 w-full md:w-96 z-10">
            {isChatOpen ? (
                <ChatWindow closeChatCb={setIsChatOpen} />
            ) : (
                <EntryPoint openChatCb={setIsChatOpen} />
            )}
        </div>
    );

}

export default JackGPT;