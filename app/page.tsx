import Avatar from "@/components/common/Avatar"
import NavMenu from "../components/common/NavMenu/HomepageNav"
import Image from "next/image"
import { passions } from '@/constants/passions';
import { CardRow } from "@/components/common/Card/CardRow";
import { Contact } from "@/components/common/Contact/Contact";

export default async function Home() {
  return (
      <main className="flex min-h-screen w-screen flex-col items-center justify-between">
        <div id="" className="flex flex-col md:flex-row h-screen w-full md:justify-center md:space-x-10 space-y-10 items-center py-8 md:py-24 md:px-8 xl:px-24 scroll-smooth">
          <div className="relative h-fit w-min text-center md:text-right flex flex-col justify-center md:justify-end md:items-end">
            <Avatar />
            <h1 className="text-9xl z-10">Jack Woods</h1>
            <div className="md:absolute ml-auto bg-[#ff709c] m-auto mt-8 h-3 w-16 md:mr-8 md:mb-16"/>
            <div>
              <p className="text-xl italic mt-16 md:mb-0">London-based Software Engineer</p>
            </div>
          </div>
          <div className="h-[80%] md:pl-[10%] mx-auto flex flex-col justify-center md:justify-start">
            <NavMenu />
          </div>
        </div>
        <div className="w-full bg-light-sec">
          <div id="about" className="scroll-smooth" style={{ marginTop: '-80px', height: '80px', visibility: 'hidden' }}></div>
          <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-stretch md:space-x-2 h-full">
            <div className="flex flex-col w-full md:w-1/2 px-4 my-6 items-center md:items-start">
              <h2>Welcome</h2>
              <p>
                I&apos;m Jack - a software engineer living and working in London. 
                I started my career in 2022 after graduating from the University of Bath with an integrated Masters in Mechanical Engineering. 
                This site acts as a space to share some of my experience, projects and passions.
              </p>
              <p>
                I am a full stack engineer specialising in NextJS / Typescript applications, with a hunger to continue to learn new technologies as my career progresses.
                My driver for the work I do is solving real problems using technology to make the world a slightly better place for us all. 
                I love working with people to understand their needs and challenges to inform the work I do. 
                Click through to my CV to find out more about my experience and skills. If you want to get in touch, you can reach me at the <a href="#contact" className="underline">contact form below.</a>
              </p>
            </div>
            <div className="relative md:w-1/2 md:min-h-fit min-h-[60vh]">
              <Image src='/graduation.jpg' alt='Graduation photo from University of Bath' fill={true} className="object-cover" />
            </div>
          </div>
        </div>
        <div className="w-full my-8">
          <div className="max-w-[1200px] w-full mx-auto px-4 flex flex-col items-center md:space-x-2 h-full">
            <h2>My Passions</h2>
            <p>
              This site also acts as a place to share projects and work from areas of my life beyond my career.
              Click through below to find out about some of the things I enjoy doing outside of work.
            </p>
            <div className="w-full flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-4 my-4 justify-between items-center">
              {passions.map((passion) => (
                <CardRow 
                  key={passion.title} 
                  title={passion.title} 
                  img={passion.img} 
                  ctaText='Read More' 
                  href={`/passions/${passion.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full bg-light-sec">
          <div id="contact" className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-stretch md:space-x-2 h-full">
            <div className="flex flex-col w-full px-4 my-6 items-center md:items-start">
              <h2>Get In Touch</h2>
              <p>I&apos;d love to hear from you. Get in touch with me using the contact form below</p>
              <Contact />
            </div>
            
          </div>
        </div>
      </main>
  )
}