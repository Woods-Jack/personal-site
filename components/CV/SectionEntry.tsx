import { SectionEntryProps } from "./CV.type"

export const SectionEntry = ({title, subtitle, date, desc}: SectionEntryProps) => {
    return(
        <div className="mx-2 md:mx-4 mb-2 flex flex-col md:flex-row justify-stretch items-center">
            <div className="mb-1 flex flex-col md:justify-between items-start md:w-1/3 w-full border-r-[#ff709c] md:border-r-2">
                <h3><strong>{title}</strong></h3>
                <h4>{subtitle}</h4>
                <em>{date}</em>
            </div>
            <p className="md:mx-4 text-justify md:w-2/3 w-full h-min text-base md:text-xl">{desc}</p>
        </div>
    )
}