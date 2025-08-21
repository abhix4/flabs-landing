"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Faq() {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const faqData = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return, and we'll provide you with a prepaid shipping label. Refunds are processed within 5-7 business days after we receive your return."
        },
        {
            question: "How long does shipping take?",
            answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) and overnight shipping options are also available at checkout. International shipping times vary by location, usually 7-14 business days."
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes! Our customer support team is available Monday through Friday, 9 AM to 6 PM EST. You can reach us via email at support@example.com, phone at (555) 123-4567, or through our live chat feature on the website."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are securely processed with SSL encryption to protect your information."
        },
        {
            question: "Can I track my order?",
            answer: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can also log into your account on our website to view real-time tracking information and delivery updates."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to over 50 countries worldwide. International shipping costs and delivery times vary by destination. Customs fees and import duties may apply and are the responsibility of the customer."
        },
        {
            question: "How do I create an account?",
            answer: "Click the 'Sign Up' button at the top of any page and fill out the registration form with your email and preferred password. You'll receive a confirmation email to activate your account. Having an account allows you to track orders, save favorites, and checkout faster."
        },
        {
            question: "What if I receive a damaged item?",
            answer: "We're sorry if you received a damaged item! Please contact us within 48 hours of delivery with photos of the damage. We'll immediately send a replacement or provide a full refund, and you won't need to return the damaged item."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center mt-20 mb-20 px-4">
            <h2 className="text-4xl font-medium text-center text-[#101010] mb-12">
                Frequently Asked Questions
            </h2>
            
            <div className="w-full space-y-4">
                {faqData.map((item, index) => (
                    <div 
                        key={index} 
                        className="border border-gray-200 rounded-lg overflow-hidden  hover:shadow-md transition-shadow duration-200"
                    >
                        <button
                            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
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