
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4">
      {/* Updated to match the design: solid orange background, larger width, and refined padding */}
      <div className="max-w-6xl mx-auto bg-orange-500 text-white rounded-[2rem] p-12 md:p-16 text-center relative overflow-hidden">
        
        {/* Updated decorative circles to match color, size, and position from the image */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-60 h-60 bg-orange-400/40 rounded-full" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-72 h-72 bg-orange-400/40 rounded-full" aria-hidden="true"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Ready to lock in lifetime access?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-orange-50">
            Apply now and become a Founding Member. Your feedback will help us shape DaySnap into the ultimate lifestyle habit tracker.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <button className="bg-white text-orange-500 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              Apply Now
            </button>
            <button className="bg-transparent text-white border border-white/80 font-semibold py-3 px-8 rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              Read FAQ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
