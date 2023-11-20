import { SectionEntryProps } from "./CV.type"

export const SectionEntry = ({title, subtitle, date, desc}: SectionEntryProps) => {
    return(
        <div className="mx-2 md:mx-4 mb-2">
            <div className="mb-1 flex md:flex-row flex-col md:justify-between items-end">
                <h3><strong>{title}</strong> | {subtitle}</h3>
                <em>{date}</em>
            </div>
            <p className="md:mx-4 text-justify">{desc}</p>
        </div>
    )
}