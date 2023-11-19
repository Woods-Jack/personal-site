import Avatar from "@/components/common/Avatar"
import NavMenu from "../components/common/NavMenu"

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
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
      <div className="flex flex-row h-screen w-full">
       <div className="flex flex-col w-2/5 h-fit p-4 m-4 ml-10 bg-[#D8C4B6]">
        <h2>About Me</h2>
       </div>
      </div>
    </main>
  )
}