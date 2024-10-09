import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/home"  target='_blank'>Home</Link>
        </li>
        <li>
          <Link href="/about" target='_blank'>About</Link>
        </li>
        <li>
          <Link href="/services"  target='_blank'>Services</Link>
        </li>
        <li>
          <Link href="/contact"  target='_blank'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
};


export default Navbar;
