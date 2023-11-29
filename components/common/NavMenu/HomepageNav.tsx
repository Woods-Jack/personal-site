'use client';

import React, { useState } from 'react';
import MenuItems from './NavList';
import { useWindowSize } from '@/hooks/useWindowSize';

const DesktopLayout: React.FC = () => (
  <MenuItems isMobile={false} />
);

const MobileLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return(
    <div className='ease-in-out relative h-full flex items-center'>
        <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-5xl'>
                &#9776;
            </button>
        </div>
    {isMenuOpen && (
        <div className={`fixed bottom-0 left-0 w-full bg-[#D8C4B6] z-50 flex flex-col items-center transform translate-y-8 transition-opacity duration-300`}>
            <MenuItems isMobile={true} />
            <button onClick={toggleMenu} className='text-2xl mt-auto mb-16'>
                &#10005;
            </button>
        </div>
    )}
    </div>
  )
}

const HomepageNav = () => {
  const isMobile = useWindowSize();

  if (isMobile === null) {
    return <div className='w-[160px] w-max-full'></div>
  }

  const NavLayout: React.FC = isMobile ? MobileLayout : DesktopLayout;

  return <NavLayout />
};

export default HomepageNav;
