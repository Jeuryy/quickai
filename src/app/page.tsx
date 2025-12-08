"use client"
import AiTools from "@/components/AiTools";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Plan from "@/components/Plan";
import Testimonial from "@/components/Testimonials";
import {Toaster} from "react-hot-toast"

export default function Home() {

  return (
    <>
        <Toaster/>
        <Navbar/>
        <Hero/>
        <AiTools/>
        <Testimonial/>
        <Plan/>
        <Footer/>
    </>
  );
}