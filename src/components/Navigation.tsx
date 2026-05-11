import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 px-6 md:px-8 py-5 bg-white/90 backdrop-blur-sm border-b-2 border-black">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group logo-group cursor-pointer">
                    <div className="relative w-8 h-8 bg-red-600 flex items-center justify-center logo-box overflow-hidden">
                        <div className="w-1 h-1 bg-white absolute top-1 left-1"></div>
                        <div className="w-1 h-1 bg-white absolute bottom-1 right-1"></div>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <span className="text-xl font-black tracking-tighter uppercase">Red<span className="text-red-600 transition-colors group-hover:text-black">pxls</span></span>
                </Link>
                
                <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-widest">
                    <a href="/#process" className="nav-link hover:text-red-600 transition-colors">Process</a>
                    <a href="/#work" className="nav-link hover:text-red-600 transition-colors">Work</a>
                    <a href="/#casestudies" className="nav-link hover:text-red-600 transition-colors">Case Studies</a>
                    <a href="/about" className="nav-link hover:text-red-600 transition-colors">About us</a>
                    <a href="/contact-us" className="nav-link hover:text-red-600 transition-colors">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <a href="/bookcall" className="pixel-button text-xs tracking-widest uppercase hidden sm:inline-flex">Book a Call</a>
                    <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-2 border-black p-6 flex flex-col gap-6 font-bold uppercase tracking-widest shadow-xl">
                    <a href="/#process" onClick={() => setIsOpen(false)} className="hover:text-red-600">Process</a>
                    <a href="/#work" onClick={() => setIsOpen(false)} className="hover:text-red-600">Work</a>
                    <a href="/#casestudies" onClick={() => setIsOpen(false)} className="hover:text-red-600">Case Studies</a>
                    <a href="/about" onClick={() => setIsOpen(false)} className="hover:text-red-600">About us</a> 
                    <a href="/contact-us" onClick={() => setIsOpen(false)} className="pixel-button text-xs tracking-widest uppercase text-center mt-4">Contact</a>
                </div>
            )}
        </nav>
    );
}
