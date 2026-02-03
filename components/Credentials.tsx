"use client";

import { useState } from "react";

const items = [
  {
    title: "Education",
    content:
      "PsyD in Clinical Psychology. Advanced clinical training focused on evidence-based therapy for anxiety, trauma, and stress-related concerns.",
  },
  {
    title: "Licensure",
    content:
      "Licensed Clinical Psychologist (California). In-person sessions in Santa Monica, CA and telehealth across California.",
  },
  {
    title: "Specialties",
    content:
      "Anxiety, panic, trauma, burnout, perfectionism, and high internal pressure — especially for high-achieving adults.",
  },
];

export default function Credentials() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#B9DBE1] py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="fade-up delay-200 text-[52px] font-semibold tracking-tight text-[#447F98] sm:text-[64px]">
          My Professional Background
        </h2>

        <div className="mx-auto mt-20 max-w-3xl text-left">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className={`fade-up delay-${300 + index * 100} border-t border-[#447F98]/60`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between py-8 text-left"
                >
                  <span className="text-2xl font-medium text-[#447F98] sm:text-3xl">
                    {item.title}
                  </span>

                  <span className="text-3xl font-light text-[#447F98]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 pb-10" : "max-h-0"
                  }`}
                >
                  <p className="mx-auto max-w-md pl-10 text-lg leading-8 text-[20px] text-[#447F98]/85">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="fade-up delay-700 border-t border-[#447F98]/60" />
        </div>
      </div>
    </section>
  );
}
