import Image from "next/image";

export default function Specialties() {
  return (
    <section className="bg-[#D6EBF3] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="fade-up delay-200 text-center text-[52px] font-semibold text-[#447F98]">
          Areas I Support
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="fade-up delay-300 flex flex-col justify-between bg-[#DADEE1] p-10">
            <div>
              <h3 className="fade-up delay-400 text-2xl text-[26px] font-semibold text-black">
                Anxiety & Overthinking
              </h3>
              <p className="fade-up delay-500 mt-6 text-[17px] leading-8 text-black/80">
                If your mind feels like it never shuts off, therapy can help you
                calm your nervous system, reduce anxious spirals, and feel more
                steady day to day.
              </p>
            </div>

            <div className="fade-up delay-600 mt-14 flex justify-center">
              <div className="relative h-[260px] w-[260px] overflow-hidden rounded-full">
                <Image
                  src="/specialty-anxiety3.jpg"
                  alt="Anxiety therapy support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="fade-up delay-500 flex flex-col justify-between bg-[#DADEE1] p-10">
            <div>
              <h3 className="fade-up delay-600 text-2xl text-[26px] font-semibold text-black">
                Trauma Therapy (EMDR)
              </h3>
              <p className="fade-up delay-700 mt-6 text-[17px] leading-8 text-black/80">
                Trauma can stay in the body long after the event has passed.
                Using EMDR and body-based approaches, we’ll work gently toward
                relief, safety, and healing.
              </p>
            </div>

            <div className="fade-up delay-800 mt-14 flex justify-center">
              <div className="relative h-[260px] w-[260px] overflow-hidden rounded-full">
                <Image
                  src="/3.jpg"
                  alt="Trauma therapy EMDR"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="fade-up delay-700 flex flex-col justify-between bg-[#DADEE1] p-10">
            <div>
              <h3 className="fade-up delay-800 text-2xl text-[26px] font-semibold text-black">
                Burnout & Perfectionism
              </h3>
              <p className="fade-up delay-900 mt-6 text-[17px] leading-8 text-black/80">
                When your standards are high and your energy is low, it can feel
                impossible to keep up. Therapy can help you set boundaries,
                recover from burnout, and feel like yourself again.
              </p>
            </div>

            <div className="fade-up delay-900 mt-14 flex justify-center">
              <div className="relative h-[260px] w-[260px] overflow-hidden rounded-full">
                <Image
                  src="/specialty-burnout.webp"
                  alt="Burnout and perfectionism support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
