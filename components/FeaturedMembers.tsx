"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Member {
  name: string;
  role: string;
  src: string;
}

const members: Member[] = [
  { name: 'Chris Evans', role: 'Lifestyle Brand', src: '/member1.png' },
  { name: 'Alison Kiara', role: 'Wellness Creator', src: '/member2.png' },
  { name: 'Alison Kiara', role: 'Productivity Coach', src: '/member3.png' },
];


const MemberCard: React.FC<Member> = ({ name, role, src }) => {
  return (
    <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100/80 text-center flex flex-col items-center transition-transform transform hover:scale-105 flex-shrink-0 w-full h-full">
      <div className="absolute w-3 h-3 rounded-full opacity-80" style={{ top: '40px', left: '40px', backgroundColor: '#6da28b60' }}></div>
      <div className="absolute w-2.5 h-2.5 bg-orange-500 rounded-full opacity-60" style={{ bottom: '40px', left: '40px' }}></div>
      <div className="absolute w-3 h-3 rounded-full opacity-80" style={{ top: '50%', right: '40px', transform: 'translateY(-50%)', backgroundColor: '#6da28b60' }}></div>
      
      <div className="relative mb-6 w-32 h-32">
        <Image 
          src={src} 
          alt={name} 
          width={128} 
          height={128} 
          className="object-cover rounded-full border-4 border-orange-500 shadow-md" 
        />
      </div>
      <h3 className="font-bold text-lg text-brand-gray-dark">{name}</h3>
      <p className="text-brand-gray text-sm">{role}</p>
    </div>
  );
};

const CarouselButton: React.FC<{
  direction: 'left' | 'right';
  onClick: () => void;
}> = ({ direction, onClick }) => (
    <button 
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 bg-orange-500 p-3 rounded-full shadow-md text-white hover:bg-orange-600 transition-all duration-300 z-20"
      style={direction === 'left' ? { left: '-80px' } : { right: '-80px' }}
      aria-label={direction === 'left' ? 'Previous member' : 'Next member'}
    >
        {direction === 'left' ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        )}
    </button>
)

export const FeaturedMembers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const updateVisibleSlides = useCallback(() => {
    if (window.innerWidth < 768) {
      setVisibleSlides(1);
    } else if (window.innerWidth < 1024) {
      setVisibleSlides(2);
    } else {
      setVisibleSlides(3);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateVisibleSlides);
    updateVisibleSlides();
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, [updateVisibleSlides]);
  
  const totalSlides = members.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };
  
  const getVisibleMembers = () => {
    const slides = [];
    for (let i = 0; i < visibleSlides; i++) {
        slides.push(members[(currentIndex + i) % totalSlides]);
    }
    return slides;
  }

  return (
    <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/premium-plan-bg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-orange-500 font-bold tracking-wider">Founders</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-gray-dark mt-2">
          Featured Founding <span className="text-orange-500">Members</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-brand-gray">
          The creators & brands shaping DaySnap.
        </p>
        <div className="mt-16 relative max-w-5xl mx-auto px-10 md:px-0">
            <div className="overflow-hidden">
                <div 
                    className="flex -mx-4" 
                >
                    {getVisibleMembers().map((member, index) => (
                        <div key={index} className="px-4 pb-4" style={{ flex: `0 0 ${100 / visibleSlides}%` }}>
                            <MemberCard {...member} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden lg:block">
             <CarouselButton direction="left" onClick={handlePrev} />
             <CarouselButton direction="right" onClick={handleNext} />
            </div>
        </div>
        <div className="mt-16">
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Apply today to be featured here!
            </button>
        </div>
      </div>
    </section>
  );
};