import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import getCurrentYear from '@/utils/getCurrentYear';

const Footer = () => {
  return (
    <footer className="bg-[#0C1446] light-text py-6">
      <div className="container w-full mx-auto flex items-center justify-between flex-col md:flex-row">
        <p>&copy;{`${getCurrentYear()} Jack Woods. All rights reserved.`}</p>
        <div className="flex space-x-6 mt-4 md:mt-0 h-8 justify-end">
          <a className='w-8 hover:text-[#ff709c]' href='https://www.linkedin.com/in/jack-woods-london/' target='_blank' aria-label='LinkedIn page'>
            <FontAwesomeIcon icon={faLinkedin} beat={true} />
          </a>
          <a className='w-8 hover:text-[#ff709c]' href='https://www.instagram.com/jack.woods_/' target='_blank' aria-label='Instagram page'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className='w-8 hover:text-[#ff709c]' href='https://github.com/Woods-Jack/' target='_blank' aria-label='Github Profile'>
            <FontAwesomeIcon icon={faGithub} />           
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;

