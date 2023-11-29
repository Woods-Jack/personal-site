import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-[#D8C4B6] py-6">
      <div className="container mx-auto flex items-center justify-between flex-col md:flex-row">
        <p>&copy; 2023 Jack Woods. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 h-8 w-1/2">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faXTwitter} />          
          <FontAwesomeIcon icon={faInstagram} />          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
