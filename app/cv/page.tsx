import { cv } from '@/constants/cv';
import { CVSection } from '@/components/CV/CVSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV',
}

export default function CVPage() {
  const {header, sections} = cv;

  return(
    <main className='pt-24'>
      <div className='max-w-[1400px] flex flex-col md:mx-auto mx-4 justify-center'>
        <h1 className='md:px-4 mb-4'>CV | Jack Woods</h1>
        <p className='md:px-4 mb-8'>
          For full contact details or a PDF copy of my CV, reach out to me&nbsp;
            <a href='/#contact' target='_blank' className='text-[#ff709c] underline'>using the contact form</a>
          , or&nbsp;
            <a href="https://www.linkedin.com/in/jack-woods-london/" target='_blank' className='text-[#ff709c] underline'>connect with me on LinkedIn</a>
          .
        </p>
        <div className='flex flex-col space-y-4 mb-4'>
          {sections.map((section, index) => (
              <CVSection key={section.header} header={section.header} content={section.content} />
          ))}
        </div>
      </div>
    </main>
  )
}

