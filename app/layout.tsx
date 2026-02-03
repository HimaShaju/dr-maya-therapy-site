import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import FadeProvider from "@/components/FadeProvider";


const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD",
  description: "Therapy in Santa Monica, CA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Zodiak Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=zodiak@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
  <FadeProvider />
  {children}
</body>

    </html>
  );
}
