"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) setShowNav(true);
      else if (currentScrollY > lastScrollY) setShowNav(false);
      else setShowNav(true);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    `hover:underline underline-offset-8 transition ${
      pathname === href ? "underline" : ""
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#D6EBF3]/90 backdrop-blur-md transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-[#447F98]">
          {/* ✅ Logo */}
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight"
            style={{ fontFamily: "Panchang, sans-serif" }}
          >
            Dr. Maya Reynolds, PsyD
          </Link>

          {/* ✅ Desktop Links */}
          <nav
            className="hidden items-center gap-12 text-lg md:flex"
            style={{ fontFamily: "Panchang, sans-serif" }}
          >
            <Link href="/blog" className={linkClass("/blog")}>
              Blog
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </nav>

          {/* ✅ Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl font-light"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* ✅ MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] bg-[#D6EBF3] text-[#447F98]">
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-6">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight"
              style={{ fontFamily: "Panchang, sans-serif" }}
            >
              Dr. Maya Reynolds, PsyD
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-light"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Menu links */}
          <div
            className="mt-20 flex flex-col items-center gap-12 text-4xl font-semibold"
            style={{ fontFamily: "Panchang, sans-serif" }}
          >
            <Link href="/blog" className="hover:opacity-80">
              Blog
            </Link>
            <Link href="/contact" className="hover:opacity-80">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
