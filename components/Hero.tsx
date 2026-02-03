import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#D6EBF3]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:gap-24">
        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <div className="fade-up delay-200 relative h-[520px] w-[420px] overflow-hidden rounded-t-full bg-[#B9DBE1] sm:h-[620px] sm:w-[520px]">
            <Image
              src="/1.jpg"
              alt="Dr. Maya Reynolds therapy office"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="text-center lg:text-left">
          <h1 className="fade-up delay-300 text-[25px] font-semibold leading-[1.05] tracking-tight text-[#447F98] sm:text-[40px] lg:text-[50px]">
            Anxiety & trauma therapy
            <br />
            in Santa Monica, CA
          </h1>

          <p className="fade-up delay-500 mt-6 text-[17px] leading-7 text-[#447F98]/80">
            If you’re feeling overwhelmed, burned out, or stuck in perfectionism,
            you don’t have to navigate it alone. Dr. Maya Reynolds, PsyD offers
            warm, collaborative therapy for adults — in-person in Santa Monica
            and via telehealth across California.
          </p>

          <div className="fade-up delay-700 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#447F98] bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-wider text-[#447F98] text-[22px] transition hover:bg-[#447F98] hover:text-white"
            >
              Schedule a Free Consultation →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
