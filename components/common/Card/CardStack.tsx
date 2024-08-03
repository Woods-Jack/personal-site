import Image from "next/image";
import { CardRowProps } from "./CardRow.type";

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
    <div className="flex md:flex-row flex-col w-full justify-between bg-light-sec rounded-xl">
      <div className="flex flex-col justify-between md:h-[300px] h-max-[300px] md:w-3/4 w-full py-2 pl-4">
        <div className="overflow-hidden flex flex-col items-center md:items-start md:pr-4">
          <h3>{title}</h3>
          {date && <em>{date}</em>}
          <p>{desc}</p>
        </div>
        {href && (
          <a className="flex flex-col items-center" href={href}>
            <button className="py-2 md:w-80 px-8 my-2 light-text bg-[#175873] hover:bg-[#ff709c] rounded-xl">
              {ctaText}
            </button>
          </a>
        )}
      </div>
      <div className="relative w-full md:w-1/2 h-[300px]">
        <Image src={src} alt={alt} fill={true} className="object-cover" />
      </div>
    </div>
  );
};
