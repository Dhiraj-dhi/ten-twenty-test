import React, { useState } from 'react';
// import logo from '../assets/logo.svg'; // Update path if needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img /* src={logo} */ alt="TenTwenty" className="h-8" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-800">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#" className="hover:text-black transition">Work</a>
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#" className="hover:text-black transition">Services</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </nav>

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

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-800 font-medium">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">Work</a>
          <a href="#" className="block">About</a>
          <a href="#" className="block">Services</a>
          <a href="#" className="block">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
