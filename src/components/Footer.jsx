import React from 'react'
import { BiMapPin, BiPhone } from 'react-icons/bi'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                        {/* Brand */}
                        <div>
                            <h3 className="font-serif text-3xl font-bold text-white mb-4">Coral Meridian</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                A sanctuary for the soul. Experience the perfect blend of luxury, nature, and adventure. We look forward to welcoming you.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-accent transition-colors"><FaFacebook size={20} /></a>
                                <a href="#" className="hover:text-accent transition-colors"><BsInstagram size={20} /></a>
                                <a href="#" className="hover:text-accent transition-colors"><BsTwitter size={20} /></a>
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-serif text-xl font-bold mb-6 text-accent">Contact Us</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <BiMapPin className="flex-shrink-0 mt-1" size={18} />
                                    <span>123 Paradise Lane, Tropical Island, 90210</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <BiPhone size={18} />
                                    <span>+91 8975786520</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CgMail size={18} />
                                    <span>reservations@coralmeridianresort.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-serif text-xl font-bold mb-6 text-accent">Quick Links</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a className="hover:text-white transition-colors">About Us</a></li>
                                <li><a className="hover:text-white transition-colors">Our Services</a></li>
                                <li><a className="hover:text-white transition-colors">Gallery</a></li>
                                <li><a className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a className="hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} Serenity Resort & Spa. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
