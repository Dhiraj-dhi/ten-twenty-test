// src/components/ContactButton.js
import React from 'react';

const ContactButton = ({ className = '' }) => {
  return (
    <button className={`border border-black text-black px-4 py-2 text-sm flex items-center gap-2 ${className}`}>
      Contact us <span>→</span>
    </button>
  );
};

export default ContactButton;