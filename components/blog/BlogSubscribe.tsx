"use client";

import { useState } from "react";

export default function BlogSubscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email Address is required.");
      return;
    }

    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-[#0F2A3A] py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="fade-up delay-200 border border-white/60 px-6 py-24 text-center text-white sm:px-20">
          {submitted ? (
            <div className="flex min-h-[220px] items-center justify-center">
              <p className="text-sm font-semibold">Thank you!</p>
            </div>
          ) : (
            <>
              <h2 className="text-5xl font-semibold">Subscribe</h2>

              <p className="mt-6 text-lg text-white/90">
                Gentle therapy resources, reflections, and updates — sent with care.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
              >
                <div className="w-full max-w-md">
                  {error && (
                    <div className="mb-3 rounded-sm bg-[#EFC6C6] px-4 py-2 text-center text-xs font-semibold text-red-700">
                      {error}
                    </div>
                  )}

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Email Address"
                    className="h-[56px] w-full border border-white/50 bg-white px-6 text-[#0F2A3A] outline-none placeholder:text-[#777]"
                  />
                </div>

                <button
                  type="submit"
                  className="h-[56px] border border-white/50 px-14 text-sm font-semibold uppercase tracking-widest transition hover:bg-white hover:text-[#0F2A3A]"
                >
                  Sign Up
                </button>
              </form>

              <p className="mt-10 text-sm text-white/80">We respect your privacy.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
