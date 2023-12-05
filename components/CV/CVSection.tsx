import { CVSectionProps } from "./CV.type"
import { SectionEntry } from "./SectionEntry"

export const CVSection = ({header, content}: CVSectionProps) => {
    return(
    <div className="md:px-4 md:mx-4 bg-light-sec rounded-lg">
        <h2 className="md:text-5xl text-4xl mt-4 mx-2 text-center md:text-left">{header}</h2>
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