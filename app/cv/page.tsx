import { cv } from '@/constants/cv';
import { CVSection } from '@/components/CV/CVSection';

export default function CVPage() {
  const {header, sections} = cv;

  return(
    <main className='pt-24'>
      <div className='max-w-[1400px] flex flex-col md:mx-auto mx-4 justify-center'>
        <h1 className='md:px-4'>Jack Woods - CV</h1>
        <p>{header.content}</p>
        <div className='flex flex-col space-y-4 mb-4'>
          {sections.map((section, index) => (
              <CVSection key={section.header} header={section.header} content={section.content} />
          ))}
        </div>
      </div>
    </main>
  )
}

