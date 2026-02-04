"use client";

export default function ContactMapSection() {
  return (
    <section className="bg-[#447F98] py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        {/* LEFT */}
        <div className="fade-up delay-200">
          <h2 className="text-[48px] font-semibold leading-[1.05]">My Office</h2>

          <div className="mt-10 text-[16px] leading-8 text-white/90">
            <p>123th Street 45 W</p>

            <a
              href="https://www.google.com/maps/search/123th+Street+45+W,+Santa+Monica,+CA+90401/@34.0135747,-118.5027436,15z/data=!3m1!4b1"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Santa Monica, CA 90401
            </a>
          </div>

          <h3 className="mt-14 text-[44px] font-semibold leading-[1.05]">Hours</h3>

          <div className="mt-8 text-[16px] leading-8 text-white/90">
            <p>Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>
        </div>

        {/* RIGHT MAP EMBED */}
        <div className="fade-up delay-300">
          <div className="relative w-full overflow-hidden rounded-sm bg-white shadow-sm">
            <iframe
              title="Santa Monica Office Map"
              src="https://www.google.com/maps?q=123th%20Street%2045%20W,%20Santa%20Monica,%20CA%2090401&output=embed"
              className="h-[360px] w-full md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* ✅ Optional button under map */}
          <a
            href="https://www.google.com/maps/search/123th+Street+45+W,+Santa+Monica,+CA+90401/@34.0135747,-118.5027436,15z/data=!3m1!4b1"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center border border-white/60 py-4 text-sm font-semibold uppercase tracking-widest transition hover:bg-white hover:text-[#447F98]"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
