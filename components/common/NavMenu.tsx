import Link from 'next/link';

const NavMenu = () => {
  const listStyles = 'transition duration-300 ease-in-out transform hover:translate-x-2 hover:text-[#ff709c]';

  return(
    <nav className='flex h-full'>
      <ul className='flex flex-col justify-evenly flex-1 text-4xl text-center md:text-left'>
        <li>
          <Link  href='/'>
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
  )
}

export default NavMenu;