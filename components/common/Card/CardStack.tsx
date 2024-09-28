import Image from "next/image";
import { CardRowProps } from "./CardRow.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const CardStack = ({
  title,
  img,
  ctaText,
  href,
  date,
  desc,
}: CardRowProps) => {
  const { src, alt } = img;

  return (
    <div className="flex md:flex-row md:min-h-[280px] flex-col w-full justify-between items-stretch bg-light-sec rounded-2xl">
      <div className="flex flex-col justify-between md:items-start items-center min-h-full md:w-3/4 w-full my-6 md:pl-6 px-4">
        <div className="overflow-hidden flex flex-col md:pr-4">
          <h3>{title}</h3>
          {date && <em>{date}</em>}
          <p>{desc}</p>
        </div>
        {href && (
          <a className="flex rounded-full items-center gap-2 w-max px-6 py-2 light-text bg-[#175873] hover:bg-[#ff709c]" href={href}>
            {ctaText}
            <FontAwesomeIcon icon={faArrowRight as IconProp} />
          </a>
        )}
      </div>
      <div className="relative w-full md:w-1/2 min-h-[280px]">
        <Image src={src} alt={alt} fill className="object-cover rounded-2xl" />
      </div>
    </div>
  );
};
