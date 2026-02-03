import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#B9DBE1] text-[#447F98]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 text-center text-sm">
        {/* Top links */}
        <div className="fade-up delay-200 flex flex-wrap justify-center gap-x-8 gap-y-3">
          <Link
            href="/privacy-cookies-policy"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Privacy & Cookies Policy
          </Link>

          <Link
            href="/good-faith-estimate"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Good Faith Estimate
          </Link>

          <Link
            href="/website-terms-conditions"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Website Terms & Conditions
          </Link>

          <Link
            href="/disclaimer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Disclaimer
          </Link>
        </div>

        {/* Credits */}
        <p className="fade-up delay-400">
          Website Template Credits:{" "}
          <a
            href="https://gobloomcreative.com/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Go Bloom Creative
          </a>
        </p>

        {/* Copyright */}
        <p className="fade-up delay-600 mt-4 text-[#447F98]/90">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
      </div>
    </footer>
  );
}
