import React from 'react';

const AnimatedText = ({ title, subtitle, hasAnimated }) =>
 (
  <div className="mb-12 text-center">
    <h2
      className={`text-3xl md:text-4xl font-semibold mb-4 transition-all duration-700 ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {title}
    </h2>
    <p
      className={`max-w-xl text-gray-600 mx-auto text-sm md:text-base transition-all duration-1000 delay-300 ${
        hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {subtitle}
    </p>
  </div>
);

export default AnimatedText;
