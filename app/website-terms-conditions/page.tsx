"use client";

import Navbar from "@/components/Navbar";
import Office from "@/components/Office";
import Footer from "@/components/Footer";
import { useFadeInOnScroll } from "@/components/useFadeInOnScroll";

export default function TermsConditionsPage() {
  useFadeInOnScroll();

  return (
    <>
      <Navbar />

      <section className="bg-[#F7F3EF] text-[#1F3B26]">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-10">
          <h1 className="fade-up delay-200 text-[56px] font-semibold leading-[1.05] sm:text-[72px]">
            Website Terms & Conditions
          </h1>

          <div className="fade-up delay-300 mt-14 max-w-4xl space-y-8 text-[16px] leading-8 sm:text-[17px]">
            <p>
              By using this website, you agree to the following terms and
              conditions. Please review them carefully.
            </p>

            <p>
              This website content is provided for general informational purposes
              only and does not replace professional advice, diagnosis, or
              treatment.
            </p>

            <p>
              You may not copy, distribute, or reproduce website materials
              without permission.
            </p>
          </div>

          <div className="mt-20 border-t-2 border-black" />
        </div>
      </section>

      <Office />
      <Footer />
    </>
  );
}
