"use client";

import Navbar from "@/components/Navbar";
import Office from "@/components/Office";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import AppointmentSection from "@/components/contact/AppointmentSection";
import ContactMapSection from "@/components/contact/ContactMapSection";
import SocialGallery from "@/components/contact/SocialGallery";

import { useFadeInOnScroll } from "@/components/useFadeInOnScroll";

export default function ContactPage() {
  useFadeInOnScroll();

  return (
    <>
      <Navbar />
      <ContactHero />
      <AppointmentSection />
      <ContactMapSection />
      <SocialGallery />
      <Office />
      <Footer />
    </>
  );
}
