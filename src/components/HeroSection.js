import React, { useEffect, useRef, useState, useCallback } from 'react';
import Header from './Header';
import {section1} from '../data/slides';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animateKey, setAnimateKey] = useState(0);
    const timeoutRef = useRef(null);
    const totalSlides = section1.length;
    const current = section1[currentSlide];
    const next = section1[(currentSlide + 1) % totalSlides];

    const resetAutoplay = useCallback(() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
            setAnimateKey((prev) => prev + 1);
        }, 10000);
    }, [totalSlides]);

    useEffect(() => {
        resetAutoplay();
        return () => clearTimeout(timeoutRef.current);
    }, [currentSlide, resetAutoplay]);

    const handleNext = () => {
        clearTimeout(timeoutRef.current);
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setAnimateKey((prev) => prev + 1);
    };

    return (
        <section
            className="relative w-full h-screen bg-cover bg-center text-white transition-all duration-1000 ease-in-out animate-hero-fade"
            style={{ backgroundImage: `url(${current.image})` }}
        >
            <Header />

            <div
                key={currentSlide}
                className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 px-10 md:px-32 z-20"
            >
                <p className="text-sm mb-2 opacity-0 animate-text-fade-up delay-300 drop-shadow">
                    {current.sub}
                </p>
                <h1 className="text-4xl md:text-6xl font-light leading-tight whitespace-pre-line opacity-0 animate-text-fade-up delay-500 drop-shadow-lg">
                    {current.title}
                </h1>
            </div>

            <div className="absolute bottom-16 left-10 md:left-32 flex items-center gap-6 z-10">
                <div
                    className="relative group cursor-pointer w-20 h-20 box-border"
                    onClick={handleNext}
                >
                    <div className="p-2 w-20 h-20 relative">
                        <img
                            src={next.image}
                            alt="Next"
                            className="w-full h-full object-cover border-4 border-white"
                        />

                        {/* Animated Border */}
                        <div
                            key={animateKey}
                            className="absolute -inset-2 rounded-sm border-white animate-progress-clockwise z-10 pointer-events-none"
                        />

                        {/* Overlay Text */}
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-medium bg-black bg-opacity-30 text-white z-20">
                            Next
                        </span>
                    </div>
                </div>

                <div className="text-sm tracking-widest text-white flex items-center h-20">
                    {String(currentSlide + 1).padStart(2, '0')} —{' '}
                    <span className="text-gray-300 ml-1">
                        {String(section1.length).padStart(2, '0')}
                    </span>
                </div>
            </div>


        </section>
    );
};

export default HeroSection;
