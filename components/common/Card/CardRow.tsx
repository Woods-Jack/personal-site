import Image from "next/image";
import { CardRowProps } from "./CardRow.type";

export const CardRow = ({title, img, ctaText, href}: CardRowProps) => {
  const {src, alt} = img;

  return(
    <div className="flex flex-col bg-teal w-full md:w-1/3 px-4 py-2 items-center bg-light-sec rounded">
    <h3>{title}</h3>
    <div className="relative h-[270px] w-full mb-4">
      <Image src={src} alt={alt} fill={true} className="object-cover" />
    </div>
    <a className="w-full" href={href}>
      <button className="w-full py-2 my-2 light-text bg-dark-sec rounded-xl" >{ctaText}</button>
    </a>
  </div>
  );
}