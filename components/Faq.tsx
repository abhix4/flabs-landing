"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Faq() {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index: any) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData = [
        {
            question: "Is there a free trial available for Flabs?",
            answer: "Yes, Flabs offers a 5 days free trial of the software. This allows labs to explore its features and evaluate its suitability for their needs before making a purchase."
        },
        {
            question: "Is Flabs a cloud-based software?",
            answer: "Yes, Flabs is a complete online software solution. It offers the convenience of cloud-based access, allowing labs to access their data securely from anywhere, anytime."
        },
        {
            question: "Do I need any specification to run this software?",
            answer: "No, you can easily run this software on any browser of your choice."
        },
        {
            question: "Can I customize the reports sent through Flabs?",
            answer: "Yes, Flabs offers customization options for reports. You can tailor the reports according to your lab's branding and requirements, providing a professional and personalized touch to the information shared with patients."
        },
        {
            question: "Can lab owners access Flabs using their mobile phones?",
            answer: "Yes, lab owners can access Flabs using their mobile phones. The software is mobile-friendly, allowing owners to generate and check reports even on their mobile devices."
        },
    
    ];

    return (
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center mt-[200px] mb-20 px-4">
            <h2 className="text-4xl font-medium text-center text-[#101010] mb-12">
                Frequently Asked Questions
            </h2>
            
            <div className="w-full space-y-4">
                {faqData.map((item, index:any) => (
                    <div 
                        key={index} 
                        className="border border-gray-200 rounded-lg overflow-hidden  hover:shadow-sm transition-shadow duration-200"
                    >
                        <button
                            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center "
                            onClick={() => toggleItem(index)}
                            aria-expanded={openItems[index] || false}
                        >
                            <span className="text-lg font-medium text-[#101010] pr-4">
                                {item.question}
                            </span>
                            <span className="flex-shrink-0 text-gray-500">
                                {openItems[index] ? (
                                    <ChevronUp size={24} />
                                ) : (
                                    <ChevronDown size={24} />
                                )}
                            </span>
                        </button>
                        
                        <div 
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openItems[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                                <p className="text-gray-700 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">
                    Still have questions?
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                    Contact Support
                </button>
            </div> */}
        </div>
    );
}