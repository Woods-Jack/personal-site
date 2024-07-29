import { CVSectionProps } from "./CV.type"
import { SectionEntry } from "./SectionEntry"

export const CVSection = ({header, content}: CVSectionProps) => {
    return(
    <div className="md:mx-4 md:py-2">
        <h2 className="md:text-4xl text-4xl mx-2 text-centertext-left">{header}</h2>
        <div className="bg-light-sec rounded-xl md:p-4 xs: pt-4">
        {content.map((entry) => (
            <SectionEntry 
                key={entry.title} 
                title={entry.title} 
                subtitle={entry.subtitle} 
                desc={entry.desc} 
                date={entry.date} 
            />
        ))}
        </div>
    </div>
    )
}