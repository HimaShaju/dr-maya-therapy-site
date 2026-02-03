import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="bg-[#F4F8FB] pt-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:gap-24">
        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <div className="fade-up delay-200 relative h-[520px] w-[420px] overflow-hidden rounded-t-full bg-[#E8F1F7] sm:h-[620px] sm:w-[520px]">
            <Image
              src="/6.jpg"
              alt="Therapy insights blog"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="text-center lg:text-left text-[#0F2A3A]">
          <h1 className="fade-up delay-300 text-[56px] font-semibold leading-[1.05] tracking-tight sm:text-[68px] lg:text-[76px]">
            Therapy Notes & Resources
          </h1>

          <p className="fade-up delay-500 mt-10 max-w-md text-[17px] leading-9 text-[#0F2A3A]/80">
            A supportive space for adults navigating anxiety, trauma recovery,
            burnout, and perfectionism — with practical tools grounded in CBT,
            EMDR, mindfulness, and body-based care.
          </p>

          <p className="fade-up delay-700 mt-6 text-[20px] font-semibold text-[#0F2A3A]">
            Written with warmth from Santa Monica, CA.
          </p>
        </div>
      </div>
    </section>
  );
}
