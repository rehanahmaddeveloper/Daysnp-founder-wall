
import React from 'react';
import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <section 
      className="bg-cover bg-center relative"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      <div className="absolute inset-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center pt-24 pb-20 md:pt-28 md:pb-28">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-[44px] font-bold text-gray-700 leading-tight">
              Become a <br />
              <span className="text-orange-500">DaySnap Founding</span>
              <br />
              Member
            </h1>
            <div className="inline-block w-16 h-1.5 bg-orange-500 mt-6 rounded-full"></div>
            <p className="mt-6 text-lg text-gray-700 font-semibold">
              Be among the first to shape the future of visual lifestyle tracking.
            </p>
            <p className="mt-4 text-gray-600">
              If you're an influencer, creator, or business who loves trying new tools, join our Founding Member program. Get lifetime access (with fair-use limits) and be featured permanently on this page.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300">
                Apply Now
              </button>
              <button className="bg-white text-orange-500 border border-orange-500 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300">
                How It Works
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="w-full h-auto max-w-md ml-auto">
              <Image src="/hero-image.png" alt="Lifestyle Tracking" width={480} height={533} className="rounded-2xl w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
