import Image from "next/image";

export default function Nav(){
    return (
        <div className="border-b w-full border-black/20 z-10">
        <div className="flex justify-between items-center py-4 max-w-6xl mx-auto">
                {/* left */}
                <div>
                    <Image
                    src='/Flabs.svg'
                    width={120}
                    height={120}
                    alt="logo"
                    />
                </div>
                {/* center */}
                <div className="uppercase flex gap-4">
                    <p className="hover:text-[#4678ee] cursor-pointer">get records</p>
                    <p className="hover:text-[#4678ee] cursor-pointer">record format</p>
                    <p className="hover:text-[#4678ee] cursor-pointer">lims</p>
                    <p className="hover:text-[#4678ee] cursor-pointer">more</p>
                </div>
                {/* right */}
                <div className="flex text-lg gap-2">
                    <p className="border rounded-lg px-3 py-1 border-black/15">Login</p>
                    <p className=" rounded-lg px-3 py-1 bg-[#4678ee] text-white">Start Free Trail</p>
                </div>
            </div>
        </div>
   
    )
}