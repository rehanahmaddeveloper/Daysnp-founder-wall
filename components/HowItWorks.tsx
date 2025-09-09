

import React from 'react';
import Image from 'next/image';

const StepCard: React.FC<{
  number: string;
  title: string;
  description: string;
  iconSrc: string;
}> = ({ number, title, description, iconSrc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-left relative overflow-hidden transition-transform transform hover:-translate-y-2">
    <div className="absolute top-4 right-5 text-8xl font-extrabold text-gray-100 opacity-90 z-0">
        {number}
    </div>
    <div className="relative z-10">
        <div className="mb-5 inline-block">
            <Image src={iconSrc} alt="" width={65} height={65} />
        </div>
        <h3 className="font-bold text-base text-brand-gray-dark mb-2">{title}</h3>
        <p className="text-brand-gray">{description}</p>
    </div>
  </div>
);

const stepsData = [
    {
        number: "01",
        title: "Sign up & Tell Us Your Story",
        description: "Fill out the form and tell us how you'll use DaySnap.",
        iconSrc: "/icon-step-1.png"
    },
    {
        number: "02",
        title: "Get Your Lifetime Code",
        description: "If approved, we'll email your unique code to unlock lifetime access.",
        iconSrc: "/icon-step-2.png"
    },
    {
        number: "03",
        title: "Use, Love & Review",
        description: "Try DaySnap for 2-4 weeks, then post an honest public review.",
        iconSrc: "/icon-step-3.png"
    },
    {
        number: "04",
        title: "Keep It Forever",
        description: "Your plan remains active for life, and you get featured as a founder.",
        iconSrc: "/icon-step-4.png"
    }
];

export const HowItWorks: React.FC = () => {
  return (
    <section 
        className="py-20 bg-gray-50 bg-cover bg-center"
        style={{ backgroundImage: "url('/how-it-works-bg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
            <p className="text-orange-500 font-bold tracking-wider">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-gray-dark mt-2">
            Your <span className="text-orange-500">Forever</span> Plan in 4 Simple Steps
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-brand-gray">
            We've made the process straightforward. Go from applicant to founding member in no time.
            </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stepsData.map(step => (
              <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};