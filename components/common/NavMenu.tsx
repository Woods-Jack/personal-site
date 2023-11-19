'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const NavMenu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => window.removeEventListener('resize', checkWindowSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const listStyles = 'transition duration-300 ease-in-out transform hover:translate-x-2 hover:text-[#ff709c]';

  // Mobile menu
  
    return isMobile ? (
      <div className='relative h-full'>
        {/* Hamburger menu button for mobile */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-4xl'>
            &#9776;
          </button>
        </div>

        {/* Full-screen menu */}
        {isMenuOpen && (
          <div className={`fixed top-0 left-0 w-full h-full bg-[#D8C4B6] z-50 flex flex-col items-center transform translate-y-8 transition-opacity duration-300`}>
            <nav className='flex flex-col h-full items-center'>
              <ul className='text-4xl my-8 text-center space-y-16'>
                <li>
                  <Link href='/' onClick={toggleMenu}>
                    <p className={listStyles}>About Me</p>
                  </Link>
                </li>
                <li>
                  <Link href='/cv' onClick={toggleMenu}>
                    <p className={listStyles}>My CV</p>
                  </Link>
                </li>
                <li>
                  <Link href='/projects' onClick={toggleMenu}>
                    <p className={listStyles}>Projects</p>
                  </Link>
                </li>
                <li>
                  <Link href='/blog' onClick={toggleMenu}>
                    <p className={listStyles}>Blog</p>
                  </Link>
                </li>
              </ul>
              <button onClick={toggleMenu} className='text-2xl mt-auto mb-16'>
                &#10005;
              </button>
            </nav>
          </div>
        )}
      </div>
    ) : (
    <nav className='flex h-full'>
      <ul className='flex flex-col justify-evenly flex-1 text-4xl text-center md:text-left'>
        <li>
          <Link href='/'>
            <p className={listStyles}>About Me</p>
          </Link>
        </li>
        <li>
          <Link href='/cv'>
            <p className={listStyles}>My CV</p>
          </Link>
        </li>
        <li>
          <Link href='/projects'>
            <p className={listStyles}>Projects</p>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <p className={listStyles}>Blog</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
