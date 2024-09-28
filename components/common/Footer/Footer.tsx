import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import getCurrentYear from '@/utils/getCurrentYear';

const Footer = () => {
  return (
    <footer className="bg-[#0C1446] light-text px-4 pt-6 md:pb-6 pb-12">
      <div className="flex md:items-left items-center flex-col xl:flex-row xl:justify-between md:w-max xl:w-full w-full max-w-full md:pl-8">
        <p className='text-base w-max'>&copy;{`${getCurrentYear()} Jack Woods. All rights reserved.`}</p>
        <div className="flex gap-6 h-8 justify-center">
          <a className='w-8 hover:text-[#ff709c] text-3xl' href='https://www.linkedin.com/in/jack-woods-london/' aria-label='LinkedIn page'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className='w-8 hover:text-[#ff709c] text-3xl' href='https://www.instagram.com/jack.woods_/' aria-label='Instagram page'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className='w-8 hover:text-[#292828] text-3xl' href='https://github.com/Woods-Jack/' aria-label='Github Profile'>
            <FontAwesomeIcon icon={faGithub} />           
          </a>
        </div>
        <div className='hidden xl:block' />
      </div>
    </footer>
  );
};

export default Footer;

