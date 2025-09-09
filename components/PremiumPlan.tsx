
import React from 'react';
import Image from 'next/image';

const PlanCard: React.FC<{
  title: string;
  description: string;
  iconSrc: string;
  highlighted?: boolean;
}> = ({ title, description, iconSrc, highlighted }) => (
    <div className={`p-8 rounded-2xl text-center flex flex-col items-center justify-start transition-transform transform hover:-translate-y-2 ${
      highlighted
        ? 'bg-orange-50'
        : 'bg-white'
    } shadow-lg border border-gray-100/80`}>
        <div className="mb-6">
            <Image src={iconSrc} alt={`${title} icon`} width={90} height={90} />
        </div>
        <h3 className="font-bold text-lg text-brand-gray-dark mb-2">{title}</h3>
        <p className="text-brand-gray text-sm px-2">{description}</p>
    </div>
);

const planData = [
    {
        title: "1 device",
        description: "Sync your phone, tablet, or desktop.",
        iconSrc: "/icon-device.png",
        highlighted: false
    },
    {
        title: "Unlimited Snaps",
        description: "Up to 1GB of storage for your visual journey.",
        iconSrc: "/icon-camera.png",
        highlighted: true
    },
    {
        title: "2 Shared Spaces",
        description: "Collaborate with your team or accountability partner.",
        iconSrc: "/icon-shared.png",
        highlighted: false
    }
]

export const PremiumPlan: React.FC = () => {
    return (
        <section 
            className="py-20 bg-white bg-cover bg-center"
            style={{ backgroundImage: "url('/premium-plan-bg.png')" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-orange-500 font-bold tracking-wider">Your Reward</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-gray-dark mt-2">
                    A Premium <span className="text-orange-500">Lifetime</span> Plan
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-brand-gray">
                    As a founding member, you get an exclusive, feature-rich plan completely free, forever.
                </p>
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {planData.map(plan => (
                        <PlanCard key={plan.title} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};