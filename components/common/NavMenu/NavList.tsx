import Link from "next/link";
import { useRef } from 'react';
import { useIsVisible } from '../../../hooks/useIsVisible';
import { menuItems } from './constants/menuItems';

interface NavListProps {
    isMobile: boolean;
}

const NavList = ({isMobile}:NavListProps) => {
    const navList = useRef<HTMLElement | null>(null);
    const isVisible = useIsVisible(navList);

    const fadeIn = `transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`

    const listStyles = isMobile ? 
        'hover:text-[#ff709c]' :
        'transition duration-300 ease-in-out transform hover:translate-x-2 hover:text-[#ff709c]';
    const containerStyle = isMobile ?
        `text-4xl my-8 text-center space-y-16 opacity-0 ${fadeIn}` :
        `flex flex-col justify-evenly flex-1 text-4xl text-center md:text-left opacity-0 ${fadeIn}`;

    return (
    <nav ref={navList} className='flex h-full'>
        <ul className={containerStyle}>
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link href={item.slug}>
                <p className={listStyles}>{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
    </nav>
    )
};

export default NavList;