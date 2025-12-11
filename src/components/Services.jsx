import React, { useEffect, useRef } from "react";
import { BiBed } from "react-icons/bi";
import { FaMountain } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 80,
                duration: 1,
                delay: index * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                },
            });
        });
    }, []);

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
                        Our Services
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Discover a world of refined luxury and curated experiences designed to rejuvenate your spirit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <BiBed size={32} />,
                            title: "Luxury Accommodation",
                            desc: "From ocean-view suites to private garden villas, our rooms are designed with your absolute comfort in mind, featuring premium amenities and stunning views.",
                        },
                        {
                            icon: <FaMountain size={32} />,
                            title: "Adventure Activities",
                            desc: "Explore the untouched wilderness. Join our guided hiking tours, water sports, and sunset cruises. Adventure awaits right outside your doorstep.",
                        },
                        {
                            icon: <GiSparkles size={32} />,
                            title: "Wellness & Spa",
                            desc: "Recharge in our world-class spa. Indulge in traditional massages, aromatherapy, and yoga sessions overlooking the serene landscape.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors group-hover:bg-green-500">
                                <div className="group-hover:text-green-50 transition-colors">
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4 text-gray-800">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
