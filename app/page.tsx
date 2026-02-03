"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Specialties from "@/components/Specialties";
import SupportSection from "@/components/SupportSection";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Credentials from "@/components/Credentials";
import Office from "@/components/Office";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useFadeInOnScroll } from "@/components/useFadeInOnScroll";
import OurOffice from "@/components/OurOffice";


export default function Home() {
  useFadeInOnScroll(); // ✅ activates fade animation everywhere

  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Specialties />
      <SupportSection />
      <About />
      <OurOffice />
      <FAQ />
      <Credentials />
      <CTA />
      <Office />
      <Footer />
    </>
  );
}
