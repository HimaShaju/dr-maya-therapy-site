"use client";

import Navbar from "@/components/Navbar";
import Office from "@/components/Office";
import Footer from "@/components/Footer";
import { useFadeInOnScroll } from "@/components/useFadeInOnScroll";

export default function GoodFaithEstimatePage() {
  useFadeInOnScroll();

  return (
    <>
      <Navbar />

      <section className="bg-[#F7F3EF] text-[#1F3B26]">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-10">
          <h1 className="fade-up delay-200 text-[56px] font-semibold leading-[1.05] sm:text-[72px]">
            Good Faith Estimate
          </h1>

          <div className="fade-up delay-300 mt-14 max-w-4xl space-y-8 text-[16px] leading-8 sm:text-[17px]">
            <p>
              You have the right to receive a “Good Faith Estimate” explaining
              how much your medical and mental health care will cost.
            </p>

            <p>
              Under the law, health care providers are required to give patients
              who don’t have insurance or who are not using insurance an estimate
              of the expected charges for medical items and services.
            </p>

            <p>
              This estimate is not a contract and actual costs may vary depending
              on your treatment plan and clinical needs.
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
