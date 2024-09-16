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
    <div className="flex flex-1 flex-row gap-4 md:flex-col bg-light-sec px-6 rounded-xl pt-4">
      <div className="relative h-16 w-16 ">
        <Image src={img.src} alt={img.alt} fill className="object-contain"/>
      </div>
      <p className="flex-1">{desc}</p>
    </div>
  );
}
