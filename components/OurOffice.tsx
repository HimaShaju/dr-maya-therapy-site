import Image from "next/image";

export default function OurOffice() {
  return (
    <section className="bg-[#D6EBF3] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT TEXT */}
          <div>
            <h2 className="fade-up delay-200 text-[52px] font-semibold leading-[1.05] text-[#447F98] sm:text-[64px]">
              A calm space for healing.
            </h2>

            <p className="fade-up delay-300 mt-10 max-w-xl text-[17px] leading-9 text-[#447F98]/85">
              My Santa Monica office is designed to feel private, quiet, and
              grounding — a space where you can slow down and feel more at ease.
              Many clients share that the environment itself helps them settle
              before we even begin.
            </p>

            <p className="fade-up delay-400 mt-8 max-w-xl text-[17px] leading-9 text-[#447F98]/85">
              I offer in-person sessions in Santa Monica and secure telehealth
              therapy across California.
            </p>

            <a
  href="https://google.com/maps?q=Santa+Monica,+CA"
  target="_blank"
  rel="noreferrer"
  className="fade-up delay-500 mt-10 text-[20px] inline-block text-[16px] font-semibold tracking-wide text-[#629BB6] underline underline-offset-4 hover:opacity-80"
>
  In-person sessions · Santa Monica, CA
</a>

          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="fade-up delay-300 relative h-[340px] overflow-hidden bg-[#DADEE1]">
              <Image
                src="/office1.jpeg"
                alt="Therapy office seating"
                fill
                className="object-cover"
              />
            </div>

            <div className="fade-up delay-500 relative h-[340px] overflow-hidden bg-[#DADEE1]">
              <Image
                src="/office2.jpeg"
                alt="Therapy office interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="fade-up delay-700 mt-20 border-t border-[#447F98]" />
      </div>
    </section>
  );
}
