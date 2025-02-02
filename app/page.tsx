import Avatar from "@/components/common/Avatar";
import NavMenu from "../components/common/NavMenu/HomepageNav";
import Image from "next/image";
import { Contact } from "@/components/common/Contact/Contact";
import { miniTechIcons, techIcons } from "@/constants/techIcons";
import { TechIcon } from "@/components/common/TechIcon";
import TechIconMini from "@/components/common/TechIconMini";
import { CardStack } from "@/components/common/Card/CardStack";
import { passions } from "@/constants/passions";
//import { projects } from "@/constants/projects";
//import { CardRow } from "@/components/common/Card/CardRow";

export default async function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between">
      <div
        id=""
        className="flex flex-col md:flex-row min-h-screen md:h-screen overflow-hidden w-full md:justify-center md:space-x-10 space-y-10 items-center py-8 md:py-24 md:px-8 xl:px-24 scroll-smooth"
      >
        <div className="relative h-fit w-min text-center md:text-right flex flex-col justify-center md:justify-end md:items-end">
          <Avatar />
          <h1 className="text-9xl z-10">Jack Woods</h1>
          <div className="md:absolute ml-auto bg-[#ff709c] m-auto mt-8 h-3 w-16 md:mr-8 md:mb-16" />
          <div>
            <p className="text-xl italic mt-16 md:mb-0">
              London-based Software Engineer
            </p>
          </div>
        </div>
        <div className="h-[80%] md:pl-[10%] mx-auto flex flex-col justify-center md:justify-start">
          <NavMenu />
        </div>
      </div>
      <div className="w-full bg-light-sec">
        <div
          id="about"
          className="scroll-smooth"
          style={{ marginTop: "-80px", height: "80px", visibility: "hidden" }}
        ></div>
        <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-stretch md:space-x-2 h-full">
          <div className="flex flex-col w-full md:w-1/2 px-4 my-6 items-center md:items-start">
            <h2>A Quick Intro...</h2>
            <p>
              I&apos;m Jack - a software engineer living and working in London.
              I started my career in 2022 after graduating from the University
              of Bath with an integrated Masters in Mechanical Engineering. A
              growing love for programming and the study of human-computer
              interaction led me to a series of software internships and
              eventually my current role today.
            </p>
            <p>
              I am a full-stack engineer specialising in modern web-based
              applications, with a hunger to continue to learn new technologies
              as my career progresses. My motivation for my work is solving real
              problems using technology to make the world a slightly better
              place for us all. I love working with people to understand their
              needs and challenges to inform the work I do.
            </p>
            <p>
              This site acts as a space to share some of my experience, projects
              and passions. Take a look at{" "}
              <a href="/cv" className="underline">
                my CV
              </a>{" "}
              to learn more about my experience and skills. If you want to get
              in touch, you can reach me using the{" "}
              <a href="#contact" className="underline">
                contact form below
              </a>
              .
            </p>
          </div>
          <div className="relative md:w-1/2 md:min-h-fit min-h-[60vh]">
            <Image
              src="/about_me.jpg"
              alt="Portrait of Jack Woods in front of Niagara Falls"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full my-8">
        <div className="max-w-[1200px] w-full mx-auto px-4 flex flex-col md:space-x-2 h-full">
          <h2>Technologies and Skills</h2>
          <p>
            My expertise lies in web development, having built a range of sites
            and web apps for personal and commercial use. My most commonly used
            technologies are:
          </p>
          <div className="w-full flex flex-col md:flex-row mt-4 mb-8 gap-8 justify-between items-stretch">
            {techIcons.map((tech) => (
              <TechIcon key={tech.img.alt} img={tech.img} desc={tech.desc} />
            ))}
          </div>
          <p>
            I also have experience in a variety of other technologies, languages
            and frameworks. Click on one of the icons below to learn more about
            my experience in the relevant area.
          </p>
          <div className="mt-4 mb-8 flex flex-row flex-wrap gap-16 md:justify-center justify-around">
            {miniTechIcons.map((tech) => (
              <TechIconMini
                key={tech.img.alt}
                img={tech.img}
                desc={tech.desc}
                title={tech.title}
              />
            ))}
          </div>
          <p>
            For full details about my technical experience, both throughout my
            career so far and in personal pursuits, check out my CV.
          </p>
        </div>
      </div>
      <div className="mb-8 px-4 max-w-[1200px]">
        <div className="bg-light-sec rounded-2xl flex flex-col md:flex-row items-stretch md:space-x-2">
          <div className="relative md:w-1/3 md:min-h-fit min-h-[60vh]">
            <Image
              src="/presentation.jpg"
              alt="Portrait of Jack Woods in front of Niagara Falls"
              fill={true}
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col w-full md:w-2/3 px-4 my-6 items-center md:items-start">
            <h3>I love speaking to people!</h3>
            <p>
              I take pride in my ability to deliver technical content in an easy
              to understand and engaging way. I love getting people excited
              about technology by focussing on the real world impact over
              complex jargon.
            </p>
            <p>
              Much of my free time at University was spent doing theatre and
              musical theatre, and I take every opportunity to bring the skills
              I learnt here into the work I do in software. I believe there is a
              real value to getting <span className="italic">everyone</span>{" "}
              excited about tech and how it can change our lives, not just us
              lucky few who get to work in the industry.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-full mb-4">
        <div className="max-w-[1200px] w-full mx-auto px-4 flex flex-col h-full">
          <h2>Personal Projects</h2>
          <p>
            Applying the skills I learn at work to my own interests is a lot of fun and allows to me to broaden my skillset 
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            {projects.map((project) => (
              <CardRow
                key={project.title}
                title={project.title}
                img={project.img}
                desc={project.desc}
                href={`/projects/${project.slug}`}
                ctaText="Find out more"
              />
            ))}
          </div>
        </div>
      </div> */}
      <div className="w-full mb-8">
        <div className="max-w-[1200px] w-full mx-auto px-4 flex flex-col h-full">
          <h2>When I&apos;m not programming...</h2>
          <p>
            I have a number of hobbies and interests outside of programming - check out a few of them below!
          </p>
          <div className="flex flex-col gap-8 my-4">
            {passions.map((passion) => (
              <CardStack
                key={passion.title}
                title={passion.title}
                img={passion.img}
                desc={passion.desc}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-light-sec">
        <div
          id="contact"
          className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-stretch md:space-x-2 h-full"
        >
          <div className="flex flex-col w-full px-4 my-6 items-center md:items-start">
            <h2>Get In Touch</h2>
            <p>
              I&apos;d love to hear from you. Get in touch with me using the
              contact form below
            </p>
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
