"use client";

import Image from "next/image";
import { useState } from "react";

const FAQS = [
  {
    q: "Do you take insurance?",
    a: "I’m an out-of-network provider. I can provide a superbill if you’d like to submit for reimbursement.",
  },
  {
    q: "What are your rates?",
    a: "Rates depend on the service type. Please reach out via the contact page for updated pricing and openings.",
  },
  {
    q: "Do you offer telehealth therapy?",
    a: "Yes — I offer secure telehealth therapy for adults anywhere in California.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#DADEE1]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-20">
        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <div className="fade-up delay-200 relative h-[560px] w-[420px] overflow-hidden rounded-t-full bg-[#B9DBE1] sm:h-[680px] sm:w-[520px]">
            <Image
              src="/5.jpg"
              alt="FAQ"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT FAQ */}
        <div>
          <h2 className="fade-up delay-300 text-[52px] font-semibold text-[#447F98] sm:text-[64px]">
            FAQs
          </h2>

          <div className="fade-up delay-400 mt-12 border-t border-[#447F98]/50">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-[#447F98]/50">
                  <button
                    className="flex w-full items-center gap-6 py-8 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-[42px] font-light text-[#447F98] leading-none">
                      {isOpen ? "−" : "+"}
                    </span>

                    <span className="text-[28px] font-medium text-[#447F98] sm:text-[34px]">
                      {item.q}
                    </span>
                  </button>

                  {/* ✅ no fade-up here (so it won't remain hidden) */}
                  {isOpen && (
                    <div className="pb-8 pl-[72px] pr-2 text-[20px] leading-7 text-[#447F98]/85">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
