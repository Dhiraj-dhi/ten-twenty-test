import React, { useEffect, useRef, useState } from 'react';
import { section2 } from '../data/slides';
import AnimatedText from './AnimatedText';

const SectionTwo = () => {
    const sectionRef = useRef();
    const [hasAnimated, setHasAnimated] = useState(false);
    const [centerIndex, setCenterIndex] = useState(1); // center image on load

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setHasAnimated(true);
            },  
            { threshold: 0.4 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

   const getSlideStyle = (index) => {
  const baseStyle = 'absolute w-[80vw] sm:w-[60vw] max-w-[500px] h-[400px] transition-all duration-700 ease-in-out transform cursor-pointer';

  if (index === centerIndex) {
    return `${baseStyle} left-1/2 -translate-x-1/2 rotate-0 scale-100 z-20 opacity-100`;
  } else if (index === centerIndex - 1) {
    return `${baseStyle} left-[5vw] sm:left-[10%] -translate-x-1/2 -rotate-[10deg] scale-90 z-10 opacity-60`;
  } else if (index === centerIndex + 1) {
    return `${baseStyle} right-[5vw] sm:right-[10%] translate-x-1/2 rotate-[10deg] scale-90 z-10 opacity-60`;
  } else {
    return `${baseStyle} opacity-0 pointer-events-none`;
  }
};



    const handleHover = (index) => {
        if (index !== centerIndex) {
            setCenterIndex(index);
        }
    };

    return (
        <section ref={sectionRef} className="relative bg-white text-center px-6 py-20 overflow-hidden">
            <AnimatedText
                title="Quality Products"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                hasAnimated={hasAnimated}
            />

            {/* Image Carousel */}
            <div className="relative w-full h-[440px] mx-auto mt-20 flex justify-center items-center overflow-hidden px-2 sm:px-0">
                {section2.map((slide, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => handleHover(index)}
                        className={getSlideStyle(index)}
                    >
                        <img
                            src={slide.image}
                            alt={slide.client}
                            className="w-full h-full object-cover rounded-xl shadow-xl"
                        />
                    </div>
                ))}
            </div>
            {/* Client Info with transition on center change */}
            <div className="mt-10 h-[60px] relative">
                <div key={centerIndex} className="absolute inset-0 transition-opacity duration-700 opacity-0 animate-text-fade-up delay-500">
                    <h4 className="text-lg font-semibold">{section2[centerIndex]?.client}</h4>
                    <p className="text-sm text-gray-500">{section2[centerIndex]?.location}</p>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
