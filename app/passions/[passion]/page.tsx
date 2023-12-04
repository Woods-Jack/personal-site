import { passions } from "@/constants/passions";
 
export default function PassionPage({ params }: { params: { passion: string } }) {
  const findPassion = passions.filter((passion) => passion.slug === params.passion);
  const passion = findPassion[0];


  return (
  <main className="pt-24">
    <div className='max-w-[1200px] flex flex-col md:mx-auto mx-4 justify-center'>
      {passion ? <h1>{passion.title}</h1> : <h1>Page Not Found</h1>}
      </div>
  </main>
  )
};