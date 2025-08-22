import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Support from "@/components/Support";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
   <div className="w-full">
    <div className="hidden md:block">
    <Nav/>
    <Hero/>
    <Features/>
    <Testimonials/>
    <Support/>
    <Faq/>
    <Footer/>
    </div>
    <div className="h-screen w-full flex flex-col items-center justify-center gap-8 md:hidden">
      <picture>
      <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f47b/512.webp" type="image/webp"/>
      <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f47b/512.gif" alt="👻" width="46" height="46"/>
    </picture>
      <h1 className="text-center text-[#4678ee] ">Please use Large Screens for Better Experience</h1>
    </div>
   </div>
  );
}
