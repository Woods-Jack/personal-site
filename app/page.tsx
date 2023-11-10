import Avatar from "@/components/common/Avatar"
import NavMenu from "../components/common/NavMenu"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col md:flex-row h-screen w-full md:justify-center md:space-x-10 space-y-10 items-center py-8 md:py-24 md:px-8 xl:px-24">
        <div className="relative h-fit w-min text-center md:text-right flex flex-col justify-center md:justify-end md:items-end">
          <Avatar />
          <h1 className="text-9xl z-10">Jack Woods</h1>
          <div className="md:absolute ml-auto bg-[#ff709c] h-3 w-16 m-auto md:mr-8 mt-12 md:mb-[-16px]"/>
        </div>
        <div className="h-[80%] md:pl-[10%] mx-auto">
          <NavMenu />
        </div>
      </div>
    </main>
  )
}
