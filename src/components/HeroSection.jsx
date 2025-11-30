import React, { useState, useEffect } from 'react';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'

const images = [
    img1,img2,img3,img4
];

const HeroSection = () => {

    const [index, setIndex] = useState(0);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">

            {/* Background Carousel */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] 
                        ${index === i ? "opacity-100" : "opacity-0"}`}
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                    Escape to <br />
                    <span className="text-accent">Paradise</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-light opacity-95 max-w-2xl mx-auto drop-shadow-md">
                    Experience luxury, adventure, and tranquility in the heart of nature. Your journey begins here.
                </p>

                <button
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-4 px-10 rounded-full 
                    transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                >
                    Book Your Stay Now
                </button>

                {/* Carousel Dots */}
                <div className="flex space-x-2 mt-6">
                    {images.map((_, dotIndex) => (
                        <div
                            key={dotIndex}
                            onClick={() => setIndex(dotIndex)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
                            ${index === dotIndex ? "bg-accent scale-125" : "bg-white/50"}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
