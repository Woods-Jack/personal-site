
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface IEntryPoint {
    openChatCb: (_state: boolean) => void
}

const EntryPoint = ({ openChatCb }: IEntryPoint) => {
    return (
        <button className="bg-[#175873] light-text md:rounded-full rounded-t-3xl flex flex-row justify-center md:justify-start items-center w-full" onClick={() => openChatCb(true)}>
            <div className="relative md:w-14 md:h-14 md:visible invisible">
                <Image src='/avatar-gpt.jpg' fill className="object-cover rounded-full" alt="JackGPT avatar" />
            </div>
            <div className="px-4 py-1">Questions? Ask JackGPT...</div>
            <FontAwesomeIcon icon={faAngleUp as IconProp} />
        </button>
    )
}

export default EntryPoint;