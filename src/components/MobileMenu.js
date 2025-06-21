// components/MobileMenu.jsx
import React from 'react';
import NavLinks from './NavLinks';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden flex justify-end px-4 pb-4">
      <NavLinks isMobile onClick={onClose} />
    </div>
  );
};

export default MobileMenu;
