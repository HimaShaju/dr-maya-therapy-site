import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="bg-[#D6EBF3] pt-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-24">
        {/* LEFT */}
        <div>
          <h1 className="fade-up delay-200 text-[64px] font-semibold leading-[1.0] tracking-tight text-[#447F98] sm:text-[84px] lg:text-[96px]">
            Let’s Connect
          </h1>

          <div className="fade-up delay-400 mt-16 max-w-md text-[#447F98]">
            <p className="text-[17px] leading-7">
              Starting therapy is courageous.
            </p>
            <p className="mt-4 text-[17px] leading-7">
              Get in touch for questions, or to book a free 15-minute
              consultation.
            </p>
          </div>

          {/* images bottom-left */}
          <div className="mt-16 flex items-end gap-10">
            <div className="fade-up delay-500 relative h-[280px] w-[280px] overflow-hidden rounded-full bg-white/50">
              <Image
                src="/16.jpg"
                alt="flowers"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="fade-up delay-600 relative -ml-16 h-[140px] w-[140px] overflow-hidden rounded-full border border-white/70 bg-white">
              <Image
                src="/5.jpg"
                alt="small flowers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT NOTE BOX */}
        <div className="fade-up delay-300 flex items-center justify-center">
          <div className="w-full max-w-xl bg-[#447F98] p-12 text-white shadow-sm sm:p-16">
            <p className="text-[17px] leading-7 text-white/90">
              <span className="font-semibold">PLEASE NOTE:</span> If you opt to
              use a “Form Block” on your contact page this is not HIPAA-compliant.
              Squarespace stores data that is input into forms in the Marketing tab
              under Profiles. Instead, you can embed a HIPAA-compliant form, a link
              to your client portal, or simply put your email address.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
