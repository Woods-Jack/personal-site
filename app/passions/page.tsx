import { passions } from "@/constants/passions";
import { CardStack } from "@/components/common/Card/CardStack";

const PassionsPage = () => {
  return(
    <main className="pt-24">
      <div className='max-w-[1200px] flex flex-col md:mx-auto mx-4 justify-center'>
        <h1>My Passions and Interests</h1>
        <div className="w-full flex flex-col space-y-4 justify-stretch">
              {passions.map((passion) => (
                <CardStack 
                  key={passion.title} 
                  title={passion.title} 
                  img={passion.img} 
                  ctaText='Read More' 
                  href={`/passions/${passion.slug}`}
                />
              ))}
            </div>
      </div>
    </main>
  )
}

export default PassionsPage;