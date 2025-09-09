
import React from 'react';
import Image from 'next/image';

const FeatureCard: React.FC<{
  iconSrc: string;
  title: string;
  description: string;
}> = ({ iconSrc, title, description }) => (
  <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/30 flex items-center space-x-4 w-full max-w-sm">
    <div className="flex-shrink-0">
      <Image src={iconSrc} alt="" width={45} height={45} aria-hidden="true" />
    </div>
    <div>
      <h3 className="font-bold text-brand-gray-dark">{title}</h3>
      <p className="text-brand-gray text-sm">{description}</p>
    </div>
  </div>
);

const featuresData = [
  {
    iconSrc: '/icon-clock.png',
    title: 'Show your journey visually',
    description: 'Turn your habits, wellness goals, or team routines into a visual story.',
  },
  {
    iconSrc: '/icon-users.png',
    title: 'Be part of the build',
    description: 'Your feedback helps guide our roadmap.',
  },
  {
    iconSrc: '/icon-sparkles.png',
    title: 'Lifetime access, free',
    description: 'Enjoy DaySnap forever under our fair-use limits.',
  },
];


export const Features: React.FC = () => {
  return (
    <section 
      className="py-20 bg-no-repeat bg-center bg-cover" 
      style={{ backgroundImage: "url('/features-background.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-center lg:text-left">
            <p className="text-orange-500 font-bold tracking-wider">FEATURES</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-gray-dark mt-2">
              Why Join as a <span className="text-orange-500">Founding</span> Member?
            </h2>
            <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-brand-gray">
              As a founding member, you get an exclusive plan with powerful features designed to help you grow with us. Here's everything included.
            </p>
            <div className="mt-8">
              <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300">
                Get The Deal
              </button>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div>
                <FeatureCard {...featuresData[0]} />
              </div>
              <div className="lg:ml-48">
                <FeatureCard {...featuresData[1]} />
              </div>
              <div>
                 <FeatureCard {...featuresData[2]} />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
