import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";


const images = [
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBiZWR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzb3J0JTIwcG9vbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://content3.jdmagicbox.com/v2/comp/ramanathapuram/e6/9999p4567.4567.240821200919.t5e6/catalogue/dusk-and-dawn-beach-resort-mandapam-ramanathapuram-beach-resorts-j06yqgd4m7.jpg"

];

const HeroSection = () => {

    const [index, setIndex] = useState(0);
    const container = useRef(null);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // GSAP Animation with useEffect
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from('.hero-title', { opacity: 0, y: 50, duration: 1, delay: 0.5 })
                .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.6')
                // .from('.hero-button', { opacity: 0, y: 20, duration: 0.6 }, '=0.5');
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={container}
            className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
        >

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
                <h1 className="hero-title font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                    Escape to <br />
                    <span className="text-accent">Paradise</span>
                </h1>
                <p className="hero-subtitle text-xl md:text-2xl mb-8 font-light opacity-95 max-w-2xl mx-auto drop-shadow-md">
                    Experience luxury, adventure, and tranquility in the heart of nature. Your journey begins here.
                </p>

                <button
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hero-button bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-4 px-10 rounded-full 
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
