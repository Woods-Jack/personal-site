import { SectionEntryProps } from "./CV.type"
import Markdown from "react-markdown"

export const SectionEntry = ({title, subtitle, date, desc}: SectionEntryProps) => {
    return(
        <div className="mx-2 md:ml-4 mb-2 flex flex-col md:flex-row justify-stretch items-center">
            <div className="mb-1 flex flex-col md:justify-between items-start md:w-1/4 w-full border-r-[#ff709c] md:border-r-2">
                {title && (<h3><strong>{title}</strong></h3>)}
                {subtitle && (<h4>{subtitle}</h4>)}
                <em>{date}</em>
            </div>
            <p className="md:mx-4 md:w-3/4 w-full h-min text-base md:text-xl whitespace-pre-wrap">{desc}</p>
        </div>
    )
}