
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { PremiumPlan } from '@/components/PremiumPlan';
import { Feedback } from '@/components/Feedback';
import { FeaturedMembers } from '@/components/FeaturedMembers';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-brand-gray-dark font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PremiumPlan />
        <Feedback />
        <FeaturedMembers />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
};

export default HomePage;
