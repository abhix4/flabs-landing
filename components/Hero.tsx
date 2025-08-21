import Image from "next/image";

export default function Hero(){
    return (
        <div className="max-w-6xl mx-auto flex flex-col items-center relative">
            <div className="w-[800px] h-[800px] absolute border border-[#d4e0fa]  bg-[#e0e7f6] rounded-full ">
            </div>
            <p className="px-4 py-1 rounded-full font-semibold text-[#4678ee] border border-[#4678ee] max-w-fit  bg-[#dde8fe] z-10 mt-[140px]">AI-Powered LIS Software</p>
            <h2 className="text-5xl mt-6 text-center z-10">Transform your lab with <br/>Flabs Pathology software!</h2>
            <p className="text-center mt-4 z-10 text-lg">Start Your 5-Day Free Trial of Our Pathology Lab Software Today</p>
            <p className="bg-[#4678ee] px-6 py-2 rounded-lg z-10 text-white font-medium text-xl mt-8 cursor-pointer shadw-lg">Get Started</p>
            <div className="z-10 mt-10 cursor-pointer">
                <Image
                src='/video.png'
                width={800}
                height={800}
                alt="video thumbnail"
                />
            </div>
        
            <div className="z-10 mt-10 cursor-pointer">
                <p className="text-lg font-medium py-2 text-center">Backed by</p>
                <Image
                src='/vc.png'
                width={100}
                height={100}
                alt="vc"
                />
            </div>
        </div>
    )
}