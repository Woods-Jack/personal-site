import Image from "next/image";
import { CardRowProps } from "./CardRow.type";

export const CardStack = ({title, img, ctaText, href}: CardRowProps) => {
  const {src, alt} = img;

  return(
    <div className="flex md:flex-row flex-col w-full md:pl-4 justify-between items-start bg-light-sec rounded">
      <div className="flex flex-col justify-between h-[300px] md:w-2/3 w-full py-2">
        <h3>{title}</h3>
        <p>This is a description</p>
        <a className="w-full" href={href}>
          <button className="py-2 w-72 my-2 light-text bg-[#175873] rounded-xl" >{ctaText}</button>
        </a>
      </div>
      <div className="relative w-full md:w-1/3 h-[300px]">
        <Image src={src} alt={alt} fill={true} className="object-cover" />
      </div>
  </div>
  );
}