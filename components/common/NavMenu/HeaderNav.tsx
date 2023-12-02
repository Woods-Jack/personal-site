'use client'

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { menuItems } from "./constants/menuItems";
import Link from "next/link";
import NavList from "./NavList";

export const HeaderNav = () => {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setShowMobileMenu(false);
    if (pathname === '/') {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const threshold = windowHeight * 0.8;

        setShowHeader(scrollY > threshold);
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setShowHeader(true);
    }
  }, [pathname]);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className={`fixed shadow-md bg-[#175873] h-20 w-full z-20 flex items-center justify-between px-6 ${showHeader ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <p className="light-title text-4xl">Jack Woods</p>
      <div>
        <ul className="hidden md:flex flex-row space-x-6">
          {menuItems.map((item) => (
            <li className="relative group" key={item.title}>
              <Link href={item.slug}>
                <p className="light-text text-xl">{item.title}</p>
                <span className="absolute h-1 w-full bg-[#ff709c] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleMobileMenu} className='text-4xl light-text'>
          &#9776;
        </button>`
      </div>
      {showMobileMenu && <div className={`fixed bottom-0 left-0 w-full bg-[#D8C4B6] z-50 flex flex-col items-center transform translate-y-8 transition-opacity duration-300`}>
            <NavList isMobile={true} />
            <button onClick={toggleMobileMenu} className='text-2xl mt-auto mb-16'>
                &#10005;
            </button>
        </div>}
    </div>
  );
};
