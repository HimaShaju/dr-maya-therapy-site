"use client";

import Navbar from "@/components/Navbar";
import Office from "@/components/Office";
import Footer from "@/components/Footer";
import { useFadeInOnScroll } from "@/components/useFadeInOnScroll";

export default function PrivacyCookiesPolicyPage() {
  useFadeInOnScroll(); // ✅ VERY IMPORTANT

  return (
    <>
      <Navbar />

      <section className="bg-[#F7F3EF] text-[#1F3B26]">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-10">
          <h1 className="fade-up delay-200 text-[56px] font-semibold leading-[1.05] sm:text-[72px]">
            Privacy & Cookies Policy
          </h1>

          <div className="fade-up delay-300 mt-14 max-w-4xl space-y-8 text-[16px] leading-8 sm:text-[17px]">
            <p>
              This is where your Privacy & Cookies Policy content will go. You
              can write your privacy information here (cookies, analytics,
              tracking, etc).
            </p>

            <p>
              Add additional sections exactly like the template. If you want,
              I’ll match it line-by-line from your screenshot.
            </p>

            <p>
              If you are collecting form submissions, newsletter signups, or
              analytics, mention what data you collect and how it is used.
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
