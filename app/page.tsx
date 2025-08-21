import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Support from "@/components/Support";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" mx-auto">
    <Nav/>
    <Hero/>
    <Features/>
    <Testimonials/>
    <Support/>
    <Faq/>
    <Footer/>
   </div>
  );
}
