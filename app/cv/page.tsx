import { cv } from '@/constants/cv';
import { CVSection } from '@/components/CV/CVSection';

export default function CVPage() {
  const {header, sections} = cv;

  return(
    <main >
      <div className='max-w-[1200px] flex flex-col md:mx-auto mx-4 justify-center mt-16'>
        <h1>Jack Woods - CV</h1>
        <p>{header.content}</p>
        <div className='flex flex-col space-y-4'>
          {sections.map((section) => (
            <CVSection key={section.header} header={section.header} content={section.content} />
          ))}
        </div>

      </div>
    </main>
  )
}

