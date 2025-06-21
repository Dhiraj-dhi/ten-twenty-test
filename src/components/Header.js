// components/Header.jsx
import React, { useState } from 'react';
import ContactButton from './ContactButton';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full mt-6 fixed top-0 left-0 z-50">
      <div className="mx-6 bg-white backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Mobile LEFT: Contact Button */}
          <div className="md:hidden">
            <ContactButton />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <NavLinks />
          </nav>

          {/* Desktop RIGHT: Contact Button */}
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
        </div>
        {/* Mobile Navigation Component */}
        <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
