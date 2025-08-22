"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    // Track scroll progress
    const { scrollYProgress } = useScroll();
    
    // Transform scroll progress into scale value (1 to 6 for full width coverage)
    const circleScale = useTransform(scrollYProgress, [0, 0.5], [1, 8]);
    
    return (
        <div className="w-full relative overflow-hidden">
              <motion.div 
                className="w-[800px] h-[800px] absolute border border-[#d4e0fa] bg-[#e0e7f6] rounded-full top-0 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ scale: circleScale }}
                transition={{ 
                    initial: { duration: 1.2, ease: "easeOut", delay: 0.2 }
                }}
            />
            
            <div className="max-w-6xl mx-auto flex flex-col items-center  overflow-hidden">
            {/* Animated background circle that grows continuously on scroll */}
          
            {/* Badge */}
            <motion.p 
                className="px-4 py-1 rounded-full font-semibold text-[#4678ee] border border-[#4678ee] max-w-fit bg-[#dde8fe] z-10 mt-[140px]"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.3 
                }}
            >
                AI-Powered LIS Software
            </motion.p>
            
            {/* Main heading */}
            <motion.h2 
                className="text-5xl mt-6 text-center z-10 text-[#101010]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                    duration: 0.7, 
                    ease: "easeOut",
                    delay: 0.5 
                }}
            >
                Transform your lab with <br/>Flabs Pathology software!
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p 
                className="text-center mt-4 z-10 text-lg text-[#101010]/80"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.7 
                }}
            >
                Start Your 5-Day Free Trial of Our Pathology Lab Software Today
            </motion.p>
            
            {/* CTA Button */}
            <motion.p 
                className="bg-[#4678ee] px-6 py-2 rounded-lg z-10 text-white font-medium text-xl mt-8 cursor-pointer shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(70, 120, 238, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.9 
                }}
            >
                Get Started
            </motion.p>
            
            {/* Video thumbnail */}
            <motion.div 
                className="z-10 mt-10 cursor-pointer"
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                    scale: 1.02,
                    y: -5
                }}
                transition={{ 
                    duration: 0.8, 
                    ease: "easeOut",
                    delay: 0.1
                }}
            >
                <Image
                    src='/video.png'
                    width={800}
                    height={800}
                    alt="video thumbnail"
                />
            </motion.div>
        
            {/* Backed by section */}
            <motion.div 
                className="z-10 mt-20 cursor-pointer pb-10"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 1.3 
                }}
            >
                <motion.p 
                    className="text-lg font-medium py-2 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Backed by
                </motion.p>
                <motion.div
                   
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Image
                        src='/vc.png'
                        width={100}
                        height={100}
                        alt="vc"
                    />
                </motion.div>
            </motion.div>
        </div>
        </div>
    )
}