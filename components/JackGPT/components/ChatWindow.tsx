import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IChatWindow {
    closeChatCb: (_state: boolean) => void;
}

const ChatWindow = ({closeChatCb}: IChatWindow) => {
    return (
        <div className="flex flex-col">
            <div className="bg-dark-sec light-text py-1 px-4 rounded-t-2xl flex flex-row justify-between items-center">
                <div>JackGPT</div>
                <button onClick={() => closeChatCb(false)}>
                    <FontAwesomeIcon icon={faXmark as IconProp} width={24} />
                </button> 
            </div>
            <div className="h-96 bg-white border-gray-400 md:border-x-[1px] overflow-y-scroll"></div>
            <textarea className="w-full p-2 resize-none h-12 border-[1px] border-gray-400" placeholder="Type your question here..." />
        </div>
    )
}

export default ChatWindow;