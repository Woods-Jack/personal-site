import { cv } from '@/constants/cv';
import { CVSection } from '@/components/CV/CVSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV',
}

export default function CVPage() {
  const { sections } = cv;

  return(
    <main className='pt-24'>
      <div className='max-w-[1200px] flex flex-col md:mx-auto mx-4 justify-center'>
        <div className='md:px-4'>
        <h1 className='mb-4'>My CV</h1>
        <p>
          If you would like a copy for your records, feel free to download a copy&nbsp; 
            <a href='https://drive.google.com/file/d/19CQD6pZ_KsnVQUFN-gG9ukxiJq-7CpBk/view?usp=sharing' className='text-[#ff709c] underline'>by clicking here</a>
          . 
        </p>
        <p >
        If you are interested in a copy of this CV with full contact details, please&nbsp;
            <a href="https://www.linkedin.com/in/jack-woods-london/" target='_blank' className='text-[#ff709c] underline'>reach out to me on LinkedIn</a>
          .
        </p>
        </div>
       
        <div className='flex flex-col space-y-4 mb-4'>
          {sections.map((section) => (
              <CVSection key={section.header} header={section.header} content={section.content} />
          ))}
        </div>
      </div>
    </main>
  )
}

