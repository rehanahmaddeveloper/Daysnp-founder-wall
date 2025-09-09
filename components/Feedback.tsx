
import React from 'react';

const FeedbackCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-start space-x-4 transition-transform transform hover:-translate-y-2">
        <div className="bg-orange-50 flex-shrink-0 text-orange-500 p-2 rounded-full mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
        </div>
        <div className="text-left">
            <h3 className="font-bold text-brand-gray-dark">{title}</h3>
            <p className="text-brand-gray text-sm">{description}</p>
        </div>
    </div>
);

const feedbackItems = [
    { title: "Daily Use", description: "Use DaySnap consistently for at least 14 days" },
    { title: "Honest Review", description: "Publish one honest review (blog, video, or social post)" },
    { title: "Share Workflow", description: "Optionally share a workflow or before/after post" },
    { title: "Founder Badge", description: "Allow us to list your logo + link on our founders wall" },
];

export const Feedback: React.FC = () => {
  return (
    <section 
        className="py-20 bg-gray-50 bg-cover bg-center relative overflow-hidden" 
        style={{ backgroundImage: "url('/how-it-works-bg.png')" }}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl font-semibold text-brand-gray-dark">In return, all we ask</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 mt-1">
                Is For Your Honest Feedback
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-brand-gray">
                Help us build the best product possible with these simple contributions.
            </p>
            <div className="mt-16 max-w-4xl mx-auto relative">
                <div className="absolute -inset-12 bg-orange-100/50 rounded-full blur-3xl opacity-50 z-0" aria-hidden="true"></div>
                <div className="relative z-10 space-y-8">
                    {/* Top Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <FeedbackCard {...feedbackItems[0]} />
                        <FeedbackCard {...feedbackItems[1]} />
                    </div>
                    {/* Bottom Row - Shifted */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:translate-x-8 lg:translate-x-12">
                        <FeedbackCard {...feedbackItems[2]} />
                        <FeedbackCard {...feedbackItems[3]} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
