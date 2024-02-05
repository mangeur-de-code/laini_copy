'use client'
import AboutComponent from "@/components/about";
import Contact from "@/components/contact";
import ContentLaine from "@/components/content";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import TakeControl from "@/components/take-control";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect } from "react";

export default function LandingPage() {
  
  return (
    <div>
      <div className="px-3 lg:px-0">
        <Navbar />
        <Home />
        <AboutComponent />
        <ContentLaine/>
        <TakeControl/>
        <FAQ />
        <Contact />
      </div>
      
    </div>
  );
}
