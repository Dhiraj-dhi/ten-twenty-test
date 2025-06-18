import React, { useState } from 'react';
import ContactButton from './ContactButton';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full mt-6 fixed top-0 left-0 z-50">
      <div className="mx-6 bg-white backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
         
         {/* Mobile LEFT: Contact us */}
          <div className="md:hidden">
            <ContactButton />
          </div>
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 font-medium text-gray-800">
            <a href="#" className="hover:text-black transition">About</a>
            <a href="#" className="hover:text-black transition">News</a>
            <a href="#" className="hover:text-black transition">Services</a>
            <a href="#" className="hover:text-black transition">Our Team</a>
            <a href="#" className="hover:text-black transition">Make Enquiry</a>
          </nav>

          {/* Desktop RIGHT: Contact us */}
          <div className="hidden md:flex items-center">
            <ContactButton />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="w-8 h-8 flex flex-col justify-between items-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <span className={`w-full h-0.5 bg-black transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-black transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden flex justify-end px-4 pb-4 text-gray-800 font-medium">
            <div className="space-y-2 text-right">
              <a href="#" className="block">About</a>
              <a href="#" className="block">News</a>
              <a href="#" className="block">Services</a>
              <a href="#" className="block">Our Team</a>
              <a href="#" className="block">Make Enquiry</a>
            </div>
          </div>
        )}
      </div>
      </div>

    </header>
  );
};

export default Header;
