import { SectionEntryProps } from "./CV.type";

export const SectionEntry = ({
  title,
  subtitle,
  date,
  desc,
}: SectionEntryProps) => {
  return (
    <div className="mx-2 flex flex-col md:flex-row justify-stretch items-stretch ">
      <div className="flex flex-col md:pb-4 md:justify-start md:w-1/4 w-full pr-2 mr-4 border-[#ff709c] md:border-r-2 xs:border-b-2">
        {title && <h3 className="font-semibold text-2xl">{title}</h3>}
        {subtitle && <h4>{subtitle}</h4>}
        <em className="text-base">{date}</em>
      </div>
      {desc && desc.length > 0 && (
        <ul className="list-disc md:mx-4 ml-4 md:w-3/4 h-min text-base md:text-lg whitespace-pre-wrap pb-4">
          {desc.map((bp, i) => (
            <li key={`bullet-point-${i + 1}`}>{bp}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
