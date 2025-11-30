import React, { useState } from 'react'
import { LuUserCog } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const currentView = () => {

    }
    return (
        <div>
            <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 cursor-pointer"
                            onClick={() => {
                                navigate('/');
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }}
                        >
                            <div className='flex items-center'>
                                <img src={logo} alt="" width={100} height={30} />
                                <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary">Coral Meridian</span>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <button
                                    onClick={() => {
                                        navigate('/');
                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                    }}
                                    className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">Home</button>
                                <p onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">Services</p>
                                <p onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">Contact</p>

                                <button
                                    onClick={() => navigate('/admin')}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentView === 'admin' ? 'text-primary font-bold' : 'text-gray-500 cursor-pointer'}`}
                                >
                                    <LuUserCog size={16} />
                                    Admin
                                </button>
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none">
                                {isOpen ? <AiOutlineClose size={24} /> : <MdOutlineMenu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white border-b border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <button onClick={() => {
                                navigate('/');
                                window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false)
                            }} className="block w-full text-left hover:text-primary px-3 py-2 rounded-md text-base font-medium">Home</button>
                            <a href="#services" onClick={() => setIsOpen(false)} className="block w-full text-left hover:text-primary px-3 py-2 rounded-md text-base font-medium">Services</a>
                            <a href="#gallery" onClick={() => setIsOpen(false)} className="block w-full text-left hover:text-primary px-3 py-2 rounded-md text-base font-medium">Gallery</a>
                            <button
                                onClick={() => navigate('/admin')}
                                className="block w-full text-left hover:text-primary px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                            >
                                <LuUserCog size={16} />
                                Admin Portal
                            </button>
                        </div>
                    </div>
                )}
            </nav>

        </div>
    )
}

export default Header
