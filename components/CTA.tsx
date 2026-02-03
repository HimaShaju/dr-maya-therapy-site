import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#447F98]">
      <div className="mx-auto flex min-h-[520px] max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="fade-up delay-200 text-5xl font-semibold tracking-tight sm:text-6xl">
          Get started today.
        </h2>

        <p className="fade-up delay-400 mt-8 max-w-2xl text-[30px] text-base leading-7 text-white/90 sm:text-lg">
          If you’re ready to feel more grounded, calm, and supported, therapy
          can help. Reach out to schedule a free 15-minute consultation.
        </p>

        <Link
          href="/contact"
          className="fade-up delay-600 mt-16 text-[22px] inline-flex items-center justify-center border border-white px-10 py-4 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-white hover:text-[#447F98]"
        >
          GET IN TOUCH →
        </Link>
      </div>
    </section>
  );
}
