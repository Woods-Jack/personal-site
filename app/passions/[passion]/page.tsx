import { passions } from "@/constants/passions";
import { Metadata, ResolvingMetadata } from 'next';

type PassionProps = {
  params: { passion: string }
}

export async function generateMetadata({ params }: PassionProps, parent: ResolvingMetadata): Promise<Metadata> {
  const passion = params.passion;

  return {
    title: `Passions: ${passion}`
  }
} 
 
export default function PassionPage({ params }: PassionProps) {
  const findPassion = passions.filter((passion) => passion.slug === params.passion);
  const passion = findPassion[0];

  return (
  <main className="pt-24">
    <div className='max-w-[1200px] flex flex-col md:mx-auto mx-4 justify-center'>
      {passion ? 
        <>
          <h1>{passion.title}</h1> 
          <p>This page is under construction...</p>
        </>
      : 
        <h1>Page Not Found</h1>
      }
    </div>
  </main>
  )
};