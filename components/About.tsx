import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#B9DBE1]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24">
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h2 className="fade-up delay-200 text-[56px] font-semibold leading-[1.05] text-[#447F98]">
            Hi, I’m Dr. Maya Reynolds.
          </h2>

          <p className="fade-up delay-400 mt-8 text-[17px] leading-[1.8] text-[#447F98]/85">
            I’m a licensed clinical psychologist based in Santa Monica,
            California, offering therapy for adults who feel overwhelmed by
            anxiety, stress, or the lingering effects of past experiences.
          </p>

          <p className="fade-up delay-500 mt-8 text-[17px] leading-[1.8] text-[#447F98]/85">
            My style is warm, collaborative, and grounded. Sessions are
            structured enough to feel supportive, while still leaving room for
            reflection and depth.
          </p>

          <div className="fade-up delay-600 mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#447F98] px-10 py-4 text-sm text-[20px] font-medium uppercase tracking-widest text-[#447F98] transition hover:bg-[#447F98] hover:text-white"
            >
              LET&apos;S CHAT <span className="ml-3">→</span>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main Image */}
          <div className="fade-up delay-300 relative h-[680px] w-[520px] overflow-hidden rounded-t-full bg-[#D6EBF3]">
            <Image
              src="/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Circle image */}
          <div className="fade-up delay-600 absolute bottom-[-80px] right-0 h-[260px] w-[260px] overflow-hidden rounded-full border border-white/70 bg-[#DADEE1] shadow-sm">
            <Image
              src="/5.jpg"
              alt="Therapy office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* bottom line */}
      <div className="fade-up delay-700 mx-auto max-w-7xl border-t border-[#447F98]" />
    </section>
  );
}
