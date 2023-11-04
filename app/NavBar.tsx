'use client';

import React, { use } from 'react';
import { usePathname  } from 'next/navigation';
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';
import classnames from 'classnames';

const NavBar = () => {
   const currentPath = usePathname();
   console.log(currentPath);

    const links = [
        { lable: 'Dashboard', href: '/'},
        { lable: 'Issues', href: '/Issues'}
    ];

  return (
    <nav  className='flex space-x-6 border-b mb-5 h-14  items-center'>
      <Link href="/" > <AiFillBug /> </Link>
      <ul className='flex space-x-6'>
        {links.map(link => 
        <Link 
        key={link.href}
        className= { classnames({
          'text-zink-900': link.href ===currentPath,
          'text-zink-500': link.href !== currentPath,
          'hover: text-zink-800  transition-colors': true,
        })}
        href={link.href}>{link.lable}
        </Link>
        
       ) }
      </ul>
    </nav>
  )
}

export default NavBar
