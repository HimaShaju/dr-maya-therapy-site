import Image from "next/image";
import Link from "next/link";

export default function SupportSection() {
  return (
    <section className="bg-[#DADEE1]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="fade-up delay-200 relative min-h-[520px] lg:min-h-[720px]">
          <Image
            src="/4.jpg"
            alt="Support therapy"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-between bg-[#B9DBE1]">
          {/* TOP CONTENT */}
          <div className="px-10 py-20 lg:px-16 lg:py-24">
            <h2 className="fade-up delay-300 text-[39px] font-semibold leading-[1.05] text-[#447F98]">
              You don’t have to do this <br />
              <span className="font-bold">all alone.</span>
            </h2>

            <p className="fade-up delay-400 mt-10 text-[17px] text-[#447F98]/85">
              If you are facing any of these, there’s hope:
            </p>

            {/* BULLETS */}
            <ul className="mt-10 space-y-5 text-[17px] text-[#447F98]/90">
              <li className="fade-up delay-500 flex gap-3">
                <span>•</span> Persistent worry or anxious spirals
              </li>
              <li className="fade-up delay-600 flex gap-3">
                <span>•</span> Feeling on edge or emotionally exhausted
              </li>
              <li className="fade-up delay-700 flex gap-3">
                <span>•</span> Trauma symptoms that resurface unexpectedly
              </li>
              <li className="fade-up delay-800 flex gap-3">
                <span>•</span> Burnout, perfectionism, and overwhelm
              </li>
              <li className="fade-up delay-900 flex gap-3">
                <span>•</span> Trouble sleeping or calming your body
              </li>
            </ul>

            <p className="fade-up delay-700 mt-16 max-w-xl text-[17px] text-[#447F98]/85">
              With empathy and evidence-based tools, we’ll work together to help
              you feel more regulated, present, and confident in your daily life.
            </p>
          </div>

          {/* BOTTOM BAR */}
          <div className="fade-up delay-900">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center bg-[#629BB6] py-6 text-sm text-[20px] font-medium uppercase tracking-widest text-white transition hover:bg-[#447F98]"
            >
              Work with me →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
