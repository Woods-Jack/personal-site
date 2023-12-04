import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import getCurrentYear from '@/utils/getCurrentYear';

const Footer = () => {
  return (
    <footer className="bg-[#0C1446] text-[#D8C4B6] py-6">
      <div className="container w-full mx-auto flex items-center justify-between flex-col md:flex-row">
        <p>&copy;{`${getCurrentYear()} Jack Woods. All rights reserved.`}</p>
        <div className="flex space-x-6 mt-4 md:mt-0 h-8 justify-end">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faXTwitter} />          
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faGithub} />           
        </div>
      </div>
    </footer>
  );
};

export default Footer;

