"use client";

import Navbar from "@/components/Navbar";
import Office from "@/components/Office";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogPosts from "@/components/blog/BlogPosts";
import BlogSubscribe from "@/components/blog/BlogSubscribe";
import { useFadeInOnScroll } from "@/components/useFadeInOnScroll";

export default function BlogPage() {
  useFadeInOnScroll();

  return (
    <>
      <Navbar />
      <BlogHero />
      <BlogPosts />
      <BlogSubscribe />
      <Office />
      <Footer />
    </>
  );
}
