
"use client";

import React, { useState } from 'react';

const faqData = [
    {
        question: "Who qualifies?",
        answer: "Creators, influencers, businesses, and wellness communities."
    },
    {
        question: "Is a review required?",
        answer: "Yes, one honest review keeps your plan active."
    },
    {
        question: "What does 'lifetime' mean?",
        answer: "Free renewal every year for as long as DaySnap operates."
    },
    {
        question: "Can I switch devices?",
        answer: "Yes, up to 2 active devices at a time."
    }
];

const AccordionItem: React.FC<{
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200/80 py-6">
            <dt>
                <button 
                    onClick={onClick} 
                    className="w-full flex justify-between items-center text-left text-brand-gray-dark"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${question.replace(/\s+/g, '-')}`}
                >
                    <span className="text-lg font-medium">{question}</span>
                    <span className="ml-6 h-7 flex items-center">
                        <svg className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>
            </dt>
            <div
                className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
                id={`faq-answer-${question.replace(/\s+/g, '-')}`}
            >
                <div className="overflow-hidden">
                    <dd className="mt-4 pr-12 text-base text-brand-gray">
                        <p>{answer}</p>
                    </dd>
                </div>
            </div>
        </div>
    );
};


export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section 
            className="py-20 bg-white bg-cover bg-center"
            style={{ backgroundImage: "url('/faq-bg.png')" }}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-orange-500 font-bold tracking-wider">Got Questions?</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-gray-dark mt-2">
                        Frequently Asked <span className="text-orange-500">Questions</span>
                    </h2>
                </div>
                <div className="mt-12">
                    <dl>
                        {faqData.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};
