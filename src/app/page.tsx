"use client"
import AiTools from "@/components/AiTools";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Plan from "@/components/Plan";
import Testimonial from "@/components/Testimonials";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {

  const {getToken} = useAuth();
  useEffect(()=> {
    getToken().then((token)=>console.log(token));
  }, [])

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