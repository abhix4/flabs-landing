'use client'
import { motion } from 'framer-motion';

export default function Support() {
    const containerVariants = {
        hidden: { 
            opacity: 0, 
            y: 60 
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
                bounce: 1,
                duration: 0.3,
           
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 20 
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 200,
                stiffness: 200,
                bounce: 1
            }
        }
    };

    return (
        <motion.div 
            className="max-w-6xl mx-auto flex flex-col items-center justify-center bg-[#4678ee] rounded-2xl h-[400px] mt-30 mb-30 shadow-lg"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
          
                <h2 className="bg-[#101010] text-white px-6 py-1 rounded-full">customer support</h2>
    

           
                <p className="text-4xl mt-4 font-medium text-center text-white/95">Support for every problem</p>
           
            
                <p className="text-lg font-medium text-center text-white/80">We'd love to help you resolve your problem.</p>
            

            <div 
                className="mt-12 flex text-white gap-4 items-center"
            
            >
                <div
                   
                >
                    <p>Write to us at</p>
                    <a href="mailto:hello@flabs.in" className="hover:text-white/80 transition-colors">hello@flabs.in</a>
                </div>
                
                <div className="h-10 bg-white/90 w-[1px] rounded-2xl"></div>
                
                <div
                   
                >
                    <p>Call us on</p>
                    <a href="tel:+918929759545" className="hover:text-white/80 transition-colors">+91 8929759545</a>
                </div>
            </div>
        </motion.div>
    );
}