import { CVSectionProps } from "./CV.type"
import { SectionEntry } from "./SectionEntry"

export const CVSection = ({header, content}: CVSectionProps) => {
    return(
    <div className="mb-2 md:px-4">
        <h2>{header}</h2>
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
    )
}