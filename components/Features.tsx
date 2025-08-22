'use client'
import { Zap, User, Monitor, TrendingUp, UserCheck, Shield, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const data = [
    {
        icon: "Zap",
        title: "Streamlined Lab Operations",
        desc: "With Flabs, you can easily manage patient registration, automate lab analysis, and generate QR coded reports for seamless access and sharing. Flabs integrates with WhatsApp, enabling automated communication and reducing manual efforts. By optimizing processes and minimizing manual tasks, Flabs helps you save time, improve accuracy, and enhance overall lab productivity."
    },
    {
        icon: "User",
        title: "Enhanced Patient Experience",
        desc: "Flabs provides a patient portal where patients can access and download their reports conveniently using their phone number login. This portal empowers patients to stay informed about their health, view their reports anytime, and take necessary actions accordingly."
    },
    {
        icon: "Monitor",
        title: "User-Friendly Interface",
        desc: "Flabs stands out for its user-friendly interface, making it accessible and intuitive for lab owners, technicians, and doctors. With its well-designed and easy-to-navigate interface, users can quickly familiarize themselves with the software and efficiently perform their tasks. This ensures a seamless user experience and enables labs to maximize their productivity without extensive training or technical expertise."
    },
    {
        icon: "TrendingUp",
        title: "Affordable and Scalable Solution",
        desc: "Flabs is designed to be accessible to labs of all sizes, from small labs to larger diagnostic centers. Flabs is also scalable, allowing you to add collection centers and expand your operations as your lab grows."
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { 
        opacity: 0, 
        y: 30,
        scale: 0.95
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
        scale: 1, 
        rotate: 0,
        transition: {
            duration: 0.5,
            delay: 0.3,
            type: "spring",
            stiffness: 200
        }
    }
}

const securityVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export default function Features(){
    const headerRef = useRef(null)
    const featuresRef = useRef(null)
    const securityHeaderRef = useRef(null)
    const securityRef = useRef(null)
    
    const headerInView = useInView(headerRef, { once: true, threshold: 0.5 })
    const featuresInView = useInView(featuresRef, { once: true, threshold: 0.2 })
    const securityHeaderInView = useInView(securityHeaderRef, { once: true, threshold: 0.5 })
    const securityInView = useInView(securityRef, { once: true, threshold: 0.3 })

    return (
        <div className="max-w-4xl mx-auto flex flex-col items-center mt-[200px]">
            <motion.div 
                ref={headerRef}
                initial={{ opacity: 0, y: -20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
            >
                <motion.h2 
                    className="bg-[#101010] text-white px-6 py-1 rounded-full inline-block"
                    initial={{ scale: 0.8 }}
                    animate={headerInView ? { scale: 1 } : { scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Powerful Features
                </motion.h2>
                <motion.p 
                    className="text-4xl mt-10 font-medium text-center text-[#101010]"
                    initial={{ opacity: 0 }}
                    animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Here's all the <span className="text-[#4678ee]">good stuff</span>
                </motion.p>
            </motion.div>
            
            <motion.div 
                ref={featuresRef}
                className="grid grid-cols-2 gap-4 mt-20"
                variants={containerVariants}
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
            >
                {
                    data.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="border border-black/10 rounded-lg px-10 py-8 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <motion.div 
                                className="bg-[#f3f5f9] p-4 rounded-full font-extralight mb-4"
                                variants={iconVariants}
                            >
                                {item.icon === "Zap" && <Zap className="h-12 w-12 text-[#4678ee]" />}
                                {item.icon === "User" && <User className="h-12 w-12 text-[#4678ee]" />}
                                {item.icon === "Monitor" && <Monitor className="h-12 w-12 text-[#4678ee]" />}
                                {item.icon === "TrendingUp" && <TrendingUp className="h-12 w-12 text-[#4678ee]" />}
                            </motion.div>
                            <motion.p 
                                className="text-[#101010] text-xl font-medium text-center"
                                initial={{ opacity: 0 }}
                                animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                            >
                                {item.title}
                            </motion.p>
                            <motion.p 
                                className="text-center mt-1 text-[#101010]/90"
                                initial={{ opacity: 0 }}
                                animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                            >
                                {item.desc}
                            </motion.p>
                        </motion.div>
                    ))
                }
            </motion.div>
            
            <motion.p 
                ref={securityHeaderRef}
                className="text-4xl font-medium text-center text-[#101010] mt-[200px]"
                initial={{ opacity: 0, y: 30 }}
                animate={securityHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Your data is <span className="text-[#4678ee]">safe</span> with us!
            </motion.p>
            
            <motion.div 
                ref={securityRef}
                className="mt-20 grid grid-cols-3 gap-8"
                initial="hidden"
                animate={securityInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.div 
                    className="flex flex-col items-center"
                    variants={securityVariants}
                    whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                    }}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={securityInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <UserCheck className="w-8 h-8 mb-4 text-blue-600" />
                    </motion.div>
                    <p className="text-center">Your patients are linked only to you</p>
                </motion.div>
                
                <motion.div 
                    className="flex flex-col items-center"
                    variants={securityVariants}
                    whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                    }}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={securityInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
                    >
                        <Shield className="w-8 h-8 mb-4 text-green-600" />
                    </motion.div>
                    <p className="text-center">Secure data backups and disaster recovery options</p>
                </motion.div>
                
                <motion.div 
                    className="flex flex-col items-center"
                    variants={securityVariants}
                    whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                    }}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={securityInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
                    >
                        <CheckCircle className="w-8 h-8 mb-4 text-purple-600" />
                    </motion.div>
                    <p className="text-center">Compliance with industry security standards and regulations</p>
                </motion.div>
            </motion.div>
        </div>
    )
}