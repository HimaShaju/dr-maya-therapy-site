import Link from "next/link";

export default function Office() {
  return (
    <section className="bg-[#D6EBF3] text-[#447F98]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-3">
        {/* LEFT */}
        <div className="fade-up delay-200">
          <h2 className="text-4xl font-semibold">Dr. Maya Reynolds, PsyD</h2>

          <div className="mt-10 space-y-3 text-lg leading-8 text-[#447F98]/85">
            <p>123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>

            <div className="pt-6 space-y-3">
              <a
                href="https://www.squarespace.com/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                email@example.com
              </a>

              <br />

              <a
                href="https://www.squarespace.com/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                (555) 555-5555
              </a>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="fade-up delay-400 md:justify-self-center">
          <h3 className="text-4xl font-semibold">Hours</h3>

          <div className="mt-10 space-y-3 text-lg leading-8 text-[#447F98]/85">
            <p>Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="fade-up delay-600 md:justify-self-end text-right">
          <h3 className="text-4xl font-semibold">Find</h3>

          <div className="mt-10 flex flex-col gap-2 text-lg">
            <Link href="/" className="underline underline-offset-4">
              Home
            </Link>
            <Link href="/contact" className="underline underline-offset-4">
              Contact
            </Link>
            <Link href="/blog" className="underline underline-offset-4">
              Blog
            </Link>
          </div>
        </div>
      </div>

      <div className="fade-up delay-700 bg-[#B9DBE1] py-10" />
    </section>
  );
}
