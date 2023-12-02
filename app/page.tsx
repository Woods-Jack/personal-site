import Avatar from "@/components/common/Avatar"
import NavMenu from "../components/common/NavMenu/HomepageNav"
import Image from "next/image"

export default async function Home() {
  return (
    <>
      <main className="flex min-h-screen w-screen flex-col items-center justify-between">
        <div className="flex flex-col md:flex-row h-screen w-full md:justify-center md:space-x-10 space-y-10 items-center py-8 md:py-24 md:px-8 xl:px-24">
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
        <div className="w-full bg-[#D8C4B6]">
          <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-stretch md:space-x-2 h-full">
            <div className="flex flex-col w-full md:w-1/2 px-4 items-center md:items-start">
              <h2>Welcome</h2>
              <p>
                I&apos;m Jack - a software engineer living and working in London. 
                I started my career in 2022 after graduating from the University of Bath with an integrated Masters in Mechanical Engineering. 
                This site acts as a space to share some of my experience, projects and passions.
              </p>
              <p>
                I studied computer science at A-Level and upon beginning my degree quickly realised that it was a relatively unique skill amongst Mechanical Engineers. 
                As part of my industry year at a building consultancy, I became part of a new smart buildings team and used these skills to write functions in specialist software to find inefficienes in building sensor data. 
                I discovered how much I enjoyed using software to solve problems and found a software engineering internship at a digital consultancy in London - the rest is history!
              </p>
            </div>
            <div className="relative md:w-1/2 md:min-h-fit min-h-[60vh]">
              <Image src='/graduation.jpg' alt='Graduation photo from University of Bath' fill={true} objectFit="cover"/>
            </div>
          </div>
        </div>
        <div className="w-full my-8">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center md:space-x-2 h-full">
          <h2>My Passions</h2>
          <p>
            This space is not just for my career journey but also for the other things that bring me joy in my everyday life. 
            To me, escapism interests completely different to my work allows me to stay motivated.
          </p>
          <div className="w-full flex md:flex-row flex-col md:space-x-4 justify-between items-center">
            <div className="flex flex-col bg-teal md:w-1/3 px-4 py-2 items-center bg-[#D8C4B6] rounded">
              <h3>Formula 1</h3>
              <div className="relative h-[270px] w-full mb-4">
                <Image src='/f1.jpg' alt='Formula 1 car in Milton Keynes' fill={true} objectFit="contain" />
              </div>
              <button className="w-full py-2 my-2 light-text bg-[#175873] rounded-xl">Read More</button>
            </div>
            <div className="flex flex-col bg-teal md:w-1/3 px-4 py-2 items-center bg-[#D8C4B6] rounded">
              <h3>Coffee</h3>
              <div className="relative h-[270px] w-full mb-4">
                <Image src='/coffee.jpg' alt='Coffee and Latte Art' fill={true} objectFit="contain" />
              </div>
              <button className="w-full py-2 my-2 light-text bg-[#175873] rounded-xl">Read More</button>
            </div>
            <div className="flex flex-col bg-teal md:w-1/3 px-4 py-2 items-center bg-[#D8C4B6] rounded">
              <h3>Musical Theatre</h3>
              <div className="relative h-[270px] w-full mb-4">
                <Image src='/theatre.jpg' alt='Jack and cast mates singing on stage' fill={true} objectFit="contain" />
              </div>
              <button className="w-full py-2 my-2 light-text bg-[#175873] rounded-xl">Read More</button>
            </div>
          </div>
        </div>
        </div>
      </main>
    </>
  )
}