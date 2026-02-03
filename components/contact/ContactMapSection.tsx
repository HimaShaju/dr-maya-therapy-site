"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: any;
  }
}

export default function ContactMapSection() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return;

      // ✅ exact location from your google maps link
      const center = { lat: 34.0135747, lng: -118.5027436 };

      const mapLink =
        "https://www.google.com/maps/search/123th+Street+45+W,+Santa+Monica,+CA+90401/@34.0135747,-118.5027436,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D";

      // ✅ map shows same zoom + same place
      const map = new window.google.maps.Map(mapRef.current, {
  center,
  zoom: 15,
  gestureHandling: "greedy",
  disableDefaultUI: false,
});

const marker = new window.google.maps.Marker({
  position: center,
  map,
  title: "123th Street 45 W, Santa Monica, CA 90401",
});

// ✅ marker click -> open link
marker.addListener("click", () => {
  window.open(mapLink, "_blank");
});

// ✅ map click (includes Santa Monica label click zone) -> open link
map.addListener("click", () => {
  window.open(mapLink, "_blank");
});

    };

    // already loaded
    if (window.google?.maps) {
      initMap();
      return;
    }

    // load script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.onload = initMap;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-[#447F98] py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        {/* LEFT */}
        <div className="fade-up delay-200">
          <h2 className="text-[48px] font-semibold leading-[1.05]">My Office</h2>

          <div className="mt-10 text-[16px] leading-8 text-white/90">
            <p>123th Street 45 W</p>

            {/* ✅ clickable location */}
            <a
              href="https://www.google.com/maps/search/123th+Street+45+W,+Santa+Monica,+CA+90401/@34.0135747,-118.5027436,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              Santa Monica, CA 90401
            </a>
          </div>

          <h3 className="mt-14 text-[44px] font-semibold leading-[1.05]">
            Hours
          </h3>

          <div className="mt-8 text-[16px] leading-8 text-white/90">
            <p>Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="fade-up delay-300">
          <div className="relative w-full overflow-hidden rounded-sm bg-white shadow-sm">
            <div ref={mapRef} className="h-[360px] w-full md:h-[420px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
