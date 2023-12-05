export interface CVSectionProps {
    header: string;
    content: SectionEntryProps[];
}

export interface SectionEntryProps {
    title?: string;
    subtitle?: string;
    date?: string;
    desc?: string;
}
