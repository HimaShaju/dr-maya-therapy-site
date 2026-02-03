"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/14.jpg",
  "/18.jpg",
  "/17.jpg",
  "/7.jpg",
];

export default function SocialGallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);

  const next = () => {
    if (active === null) return;
    setActive((active + 1) % images.length);
  };

  return (
    <section className="bg-[#D6EBF3] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="fade-up delay-200 text-[56px] font-semibold text-[#447F98]">
          Find me on social.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className="fade-up delay-300 relative h-[280px] w-full overflow-hidden bg-[#B9D8E1]"
            >
              <Image
                src={src}
                alt={`Social ${i + 1}`}
                fill
                className="object-cover transition duration-300 hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-6"
          onClick={next}
        >
          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute right-6 top-6 text-4xl font-light text-white hover:opacity-80"
          >
            ×
          </button>

          {/* Image */}
          <div className="relative h-[70vh] w-full max-w-5xl">
            <Image
              src={images[active]}
              alt="Social Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
