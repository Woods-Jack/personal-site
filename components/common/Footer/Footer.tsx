import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import getCurrentYear from '@/utils/getCurrentYear';

const Footer = () => {
  return (
    <footer className="bg-[#0C1446] light-text py-6 xs:pb-12 md:pb-4">
      <div className="container w-full mx-auto flex items-center justify-between flex-col md:flex-row">
        <p className='text-base'>&copy;{`${getCurrentYear()} Jack Woods. All rights reserved.`}</p>
        <div className="flex space-x-6 mt-4 md:mt-0 md:mr-64 h-8 justify-end">
          <a className='w-8 hover:text-[#ff709c]' href='https://www.linkedin.com/in/jack-woods-london/' aria-label='LinkedIn page'>
            <FontAwesomeIcon icon={faLinkedin} beat={true} />
          </a>
          <a className='w-8 hover:text-[#ff709c]' href='https://www.instagram.com/jack.woods_/' aria-label='Instagram page'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className='w-8 hover:text-[#ff709c]' href='https://github.com/Woods-Jack/' aria-label='Github Profile'>
            <FontAwesomeIcon icon={faGithub} />           
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;

