import Image from "next/image";

export interface ITechIcon {
  img: IImage;
  desc: string;
  title?: string;
};

export interface IImage {
  src: string;
  alt: string;
};

export const TechIcon = ({img, desc}: ITechIcon) => {
  return (
    <div className="flex flex-1 flex-row md:space-y-2 space-y-0 space-x-2 md:flex-col">
      <div className="relative h-16 w-16 md:w-full">
        <Image src={img.src} alt={img.alt} fill className="object-contain pt-2"/>
      </div>
      <p className="text-base flex-1">{desc}</p>
    </div>
  );
}
