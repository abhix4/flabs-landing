'use client'
import { useEffect, useState } from "react";

const data = [
    {
        name:'Mr. Shubham Kumar',
        company:"nidan diagonistics",
        testimonial:"I have been using the Flabs software for several months now, and it has been a game-changer for my lab. The automated report sending and bill sending features have saved me a lot of time and effort, and I no longer have to worry about manually sending out reports to patients and it also saves the printing cost."
    },
    {
        name:'Mr. Akshay Kumar',
        company:"shwaas diagnostics",
        testimonial:"As a healthcare professional, I highly recommend Flabs LIS software. One of the standout features of this software is its ease of use. Whether you're a lab owner, technician, or doctor, the software's user-friendly design makes it easy to navigate and operate."
    }
]


export default function Testimonials(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);


    return (
        <div className="max-w-6xl mx-auto flex flex-col items-center mt-[200px]">
            <h2 className="bg-[#101010] text-white px-6 py-1 rounded-full">Testimonials</h2>
            <p className="text-4xl mt-10 font-medium text-center text-[#101010]">What our <span className="text-[#4678ee]">customers</span> say</p>
             <div 
                className="relative w-full max-w-4xl"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                {/* Main Slider */}
                <div className="overflow-hidden rounded-2xl mt-24">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {data.map((testimonial, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <div className="bg-white p-8 md:p-12  border border-black/10 min-h-[300px] flex flex-col justify-center rounded-2xl">
                                    {/* Quote Icon */}
                                    {/* <div className="flex justify-center mb-6">
                                        <Quote className="w-12 h-12 text-[#4678ee] opacity-70" />
                                    </div> */}
                                    
                                    {/* Testimonial Text */}
                                    <p className="text-gray-700 text-lg leading-relaxed text-center mb-8 italic">
                                        "{testimonial.testimonial}"
                                    </p>
                                    
                                    {/* Author Info */}
                                    <div className="text-center">
                                        <h4 className="font-semibold text-[#101010] text-xl mb-1">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-[#4678ee] font-medium uppercase text-xs">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
        </div>
    )
}