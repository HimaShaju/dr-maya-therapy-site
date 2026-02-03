import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="bg-[#B9DBE1]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-0 px-0 lg:grid-cols-2">
        {/* LEFT TEXT */}
        <div className="flex flex-col justify-between px-10 py-20 text-[#447F98] lg:px-16">
          <h2 className="fade-up delay-200 text-[44px] font-semibold leading-[1.05] tracking-tight lg:text-[56px]">
            Feel grounded again.
          </h2>

          <p className="fade-up delay-400 mt-10 max-w-xl text-lg text-[17px] leading-9 text-[#447F98]/85">
            When anxiety, trauma, or burnout starts to run your life, even small
            things can feel heavy. You may look “fine” on the outside — but
            inside it feels exhausting to keep holding it all together.
          </p>

          <p className="fade-up delay-600 mt-8 max-w-xl text-lg leading-9 text-[17px] text-[#447F98]/85">
            Therapy can help you slow down, reconnect with yourself, and build
            tools that actually work in real life — using a blend of CBT, EMDR,
            mindfulness, and body-based approaches.
          </p>

          {/* BUTTON */}
          <Link
            href="/contact"
            className="fade-up delay-800 mt-14 flex w-full items-center justify-center border-t border-[#447F98] text-[20px] py-8 text-sm font-semibold uppercase tracking-widest transition hover:bg-[#447F98] hover:text-white"
          >
            Work With Dr. Maya <span className="ml-2">→</span>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="fade-up delay-300 relative min-h-[520px] w-full">
          <Image
            src="/2.jpg"
            alt="Therapy support in Santa Monica"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
