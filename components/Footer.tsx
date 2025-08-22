import Image from "next/image";

export default function Footer(){
    return (
        <div className="w-full bg-[#111111] text-white py-20">

        <div  className="max-w-6xl mx-auto flex items-end justify-between">
                 <div>
                <div>
                    <Image
                    src='/flabs_footer.svg'
                    width={120}
                    height={120}
                    alt="logo"
                    />
                </div>
                <p className="mt-10">
                    Plot No-20, Knowledge Park 2,<br/>
                    IIT Roorkee Extension Centre, Tides<br/>
                    Incubator, Greater Noida - 203106
                </p>
                <p className="mt-2">M: +91 8929759545</p>
                <p className="mt-2">hello@flabs.in</p>
                <p className="mt-2">Product By: Diagnoshuttle Private Limited</p>

            </div>


            <div>
                <p className="text-lg font-medium mb-1">Useful Links</p>
                <p className="cursor-pointer">Login</p>
                <p className="cursor-pointer">Investor Relations</p>
                <p className="cursor-pointer">Pathalogy LIMS</p>
                <p className="cursor-pointer">Get Records</p>
                <p className="cursor-pointer">Get a Demo</p>
            </div>
            <div>
                <p className="text-lg font-medium mb-1">Company</p>
                <p className="cursor-pointer">About us</p>
                <p className="cursor-pointer">Blogs</p>
                <p className="cursor-pointer">Terms and Conditions</p>
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Cancellation & Refund Policy</p>
            </div>
        </div>
        </div>
    )
}