import { miniTechIcons } from "@/constants/techIcons";
import Image from "next/image";

export default async function Technologies() {
  return (
    <main className="pt-24">
      <div className="max-w-[1200px] flex flex-col md:mx-auto mx-4 justify-center">
        <h1>Technologies I use</h1>
        <p>
          Listed below are the technologies I use most commonly in my current
          work, and some information about my experience in these areas.
        </p>
        <div className="flex flex-col gap-4">
        {miniTechIcons.map((tech) => (
          <div key={tech.img.src} className="flex gap-4">
            <div className="relative w-16 h-16 shrink-0">
              <Image src={tech.img.src} alt={tech.img.alt} fill className="object-contain" />
            </div>
            <div>
              <h3>{tech.title}</h3>
              <p>{tech.desc}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </main>
  );
}
