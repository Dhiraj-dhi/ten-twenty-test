import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';

import slide1 from '../assets/images/farmimage.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

const slides = [
    {
        image: slide1,
        title: 'From Our Farms\nTo Your Hands',
        sub: 'Welcome To TenTwenty Farms',
    },
    {
        image: slide2,
        title: 'Delivering Quality\nFarm Produce',
        sub: 'Fresh Harvest Everyday',
    },
    {
        image: slide3,
        title: 'Healthy Living\nFrom the Ground Up',
        sub: 'Trusted by Families',
    },
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animateKey, setAnimateKey] = useState(0); // force border animation reset
    const timeoutRef = useRef(null);
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    const nextSlide = slides[nextSlideIndex];
    // Autoplay logic
    useEffect(() => {
        const next = () => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setAnimateKey((prev) => prev + 1); // reset progress bar
        };

        timeoutRef.current = setTimeout(next, 10000);

        return () => clearTimeout(timeoutRef.current);
    }, [currentSlide]);

    const handleNextClick = () => {
        clearTimeout(timeoutRef.current);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimateKey((prev) => prev + 1);
    };

    const { image, title, sub } = slides[currentSlide];

    return (
        <section
            className="relative w-full h-screen bg-cover bg-center text-white transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url(${image})` }}
        >
            <Header />

            {/* Animated Text */}
            <div
                key={currentSlide}
                className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 px-10 md:px-32 z-20"
            >
                <p className="text-sm mb-2 opacity-0 animate-fade-in delay-500 drop-shadow">
                    {sub}
                </p>
                <h1 className="text-4xl md:text-6xl font-light leading-tight whitespace-pre-line opacity-0 animate-slide-in drop-shadow-lg">
                    {title}
                </h1>
            </div>

            {/* Custom Next Button with progress border */}
            <div className="absolute bottom-16 left-10 md:left-32 flex items-center gap-6 z-10">
                {/* Next Thumbnail with Progress Border */}
                <div className="relative group cursor-pointer w-20 h-20" onClick={handleNextClick}>
                    {/* Thumbnail Image */}
                    <img
                        src={nextSlide.image}
                        alt="Next"
                        className="w-full h-full object-cover border-4 border-white"
                    />

                    {/* Outer animated progress border */}
                    <div
                        key={animateKey}
                        className="absolute -inset-2 rounded-sm border-2 border-white animate-progress-clockwise z-10"
                    />

                    {/* Overlay Text */}
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium bg-black bg-opacity-30 text-white z-20">
                        Next
                    </span>
                </div>

                {/* Pagination Right to the Image */}
                <div className="text-sm tracking-widest text-white flex items-center h-20">
                    {String(currentSlide + 1).padStart(2, '0')} — <span className="text-gray-300 ml-1">{String(slides.length).padStart(2, '0')}</span>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;