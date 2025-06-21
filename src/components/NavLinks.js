// components/NavLinks.jsx
import React from 'react';

const navItems = [
  { label: 'About', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Our Team', href: '#' },
  { label: 'Make Enquiry', href: '#' },
];

const NavLinks = ({ isMobile = false, onClick }) => (
  <div className={`${isMobile ? 'space-y-2 text-right' : 'flex space-x-8'} font-medium text-gray-800`}>
    {navItems.map(({ label, href }) => (
      <a
        key={label}
        href={href}
        className={`${isMobile ? 'block' : 'hover:text-black transition'}`}
        onClick={onClick}
      >
        {label}
      </a>
    ))}
  </div>
);

export default NavLinks;