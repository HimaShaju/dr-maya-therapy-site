"use client";

import Navbar from "@/components/Navbar";
import Office from "@/components/Office";
import Footer from "@/components/Footer";
import { useFadeInOnScroll } from "@/components/useFadeInOnScroll";

export default function DisclaimerPage() {
  useFadeInOnScroll();

  return (
    <>
      <Navbar />

      <section className="bg-[#F7F3EF] text-[#1F3B26]">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-10">
          <h1 className="fade-up delay-200 text-[56px] font-semibold leading-[1.05] sm:text-[72px]">
            Disclaimer
          </h1>

          <div className="fade-up delay-300 mt-14 max-w-4xl space-y-8 text-[16px] leading-8 sm:text-[17px]">
            <p>
              The information on this website is for educational and
              informational purposes only and is not a substitute for therapy,
              medical care, or psychological treatment.
            </p>

            <p>
              Visiting this website or contacting through it does not establish a
              therapist-client relationship.
            </p>

            <p>
              If you are experiencing an emergency, please call 911 or your local
              emergency services immediately.
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
