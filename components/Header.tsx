"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const DaySnapLogo: React.FC = () => (
    <div className="flex items-center">
        <Image src="/daysnap-logo.png" alt="DaySnap Logo" width={115} height={36} className="h-8 w-auto" />
    </div>
);


export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Privacy' },
    { href: '#', label: 'Terms' },
    { href: '#', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <DaySnapLogo />
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
             {navLinks.map(link => (
                <a key={link.label} href={link.href} className="text-gray-600 hover:text-orange-500 font-medium border-b-2 border-transparent hover:border-orange-500 transition-colors">{link.label}</a>
             ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:bg-orange-600 transition-all duration-300">
              Sign Up for Early Access
            </button>
            <button className="bg-white text-orange-500 border border-orange-500 font-semibold py-2 px-5 rounded-full shadow-md hover:bg-orange-50 transition-all duration-300">
              Partner with DaySnap
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
             {navLinks.map(link => (
                <a key={link.label} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50">{link.label}</a>
             ))}
          </div>
          <div className="pb-4 pt-2 px-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
             <button className="w-full sm:w-auto bg-orange-500 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:bg-orange-600 transition-all duration-300">
              Sign Up for Early Access
            </button>
            <button className="w-full sm:w-auto bg-white text-orange-500 border border-orange-500 font-semibold py-2 px-5 rounded-full shadow-md hover:bg-orange-50 transition-all duration-300">
              Partner with DaySnap
            </button>
          </div>
        </div>
      )}
    </header>
  );
};