const data = [
    {
        icon:"",
        title:"Streamlined Lab Operations",
        desc:"With Flabs, you can easily manage patient registration, automate lab analysis, and generate QR coded reports for seamless access and sharing. Flabs integrates with WhatsApp, enabling automated communication and reducing manual efforts. By optimizing processes and minimizing manual tasks, Flabs helps you save time, improve accuracy, and enhance overall lab productivity."
    },
    {
        icon:"",
        title:"Enhanced Patient Experience",
        desc:"Flabs provides a patient portal where patients can access and download their reports conveniently using their phone number login. This portal empowers patients to stay informed about their health, view their reports anytime, and take necessary actions accordingly."
    },
    {
        icon:"",
        title:"User-Friendly Interface",
        desc:"Flabs stands out for its user-friendly interface, making it accessible and intuitive for lab owners, technicians, and doctors. With its well-designed and easy-to-navigate interface, users can quickly familiarize themselves with the software and efficiently perform their tasks. This ensures a seamless user experience and enables labs to maximize their productivity without extensive training or technical expertise."
    },
    {
        icon:"",
        title:"Affordable and Scalable Solution",
        desc:"Flabs is designed to be accessible to labs of all sizes, from small labs to larger diagnostic centers. Flabs is also scalable, allowing you to add collection centers and expand your operations as your lab grows."
    }
]

export default function Features(){
    return (
        <div className="max-w-4xl mx-auto flex flex-col items-center mt-20">
            <h2 className="bg-[#101010] text-white px-6 py-1 rounded-full">Powerful Features</h2>
            <p className="text-4xl mt-10 font-medium text-center text-[#101010]">Here's all the <span className="text-[#4678ee]">good stuff</span></p>
            <div className="grid grid-cols-2 gap-4 mt-20">
                {
                    data.map((item, index) => (
                        <div key={index} className="border border-black/10 rounded-lg px-10 py-8">
                            <p className="text-[#101010] text-xl font-medium">{item.title}</p>
                            <p className="">{item.desc}</p>
                        </div>
                    ))
                }
            </div>
            <p className="text-4xl  font-medium text-center text-[#101010] mt-30">Your data is <span className="text-[#4678ee]">safe</span> with us!</p>
            <div className="mt-20 flex gap-8">
                <div>
                <p className="text-center">Your patients are linked only to you</p>
                </div>
                <div>
                <p className="text-center">Secure data backups and disaster recovery options</p>
                </div>
                <div>
                <p className="text-center">Compliance with industry security standards and regulations</p>
                </div>
            </div>
        </div>
    )
}