import AiTools from "@/components/AiTools";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Plan from "@/components/Plan";
import Testimonial from "@/components/Testimonials";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AiTools/>
        <Testimonial/>
        <Plan/>
        <Footer/>
    </>
  );
}