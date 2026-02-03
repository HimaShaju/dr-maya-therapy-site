"use client";

import Navbar from "@/components/Navbar";
import Office from "@/components/Office";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useFadeInOnScroll } from "@/components/useFadeInOnScroll";

const blogData: Record<
  string,
  {
    date: string;
    title: string;
    prev?: { title: string; slug: string };
    next?: { title: string; slug: string };
    content: string[];
  }
> = {
  "blog-post-one": {
    date: "MAR 11",
    title: "Blog Post One",
    next: {
      title: "Blog Post Two",
      slug: "blog-post-two",
    },
    content: [
      "If you live with anxiety, it can feel like your mind is always scanning — for what might go wrong, what you should’ve said, or what you forgot to do. Even when life is “fine,” your body may still feel tense, on edge, or unable to relax.",
      "This is one of the reasons anxiety can be so exhausting. It isn’t just a thought pattern — it’s often a full-body experience. When the nervous system stays activated for long periods of time, it can show up as racing thoughts, irritability, difficulty sleeping, digestive discomfort, or feeling constantly overwhelmed.",
      "In therapy, we slow down and start building safety from the inside out. Using approaches like CBT, mindfulness, and body-based tools, you can begin to understand what your anxiety is protecting you from — and learn practical ways to feel calmer in real life, not just in theory.",
    ],
  },

  "blog-post-two": {
    date: "MAR 11",
    title: "Blog Post Two",
    prev: { title: "Blog Post One", slug: "blog-post-one" },
    next: { title: "Blog Post Three", slug: "blog-post-three" },
    content: [
      "Burnout often looks like losing motivation, feeling emotionally numb, or struggling to keep up — even with things that used to feel easy. Many people blame themselves and think they’re failing, but burnout is frequently the nervous system’s response to chronic stress.",
      "When your body has been in “push through” mode for too long, it eventually starts conserving energy. You may feel foggy, disconnected, exhausted, or like you can’t access joy. This isn’t weakness — it’s a signal.",
      "Therapy can help you recover in a way that feels sustainable. Together we can identify stress patterns, rebuild boundaries, and support nervous system regulation through mindfulness and body-based approaches — so rest doesn’t feel like guilt, it feels like healing.",
    ],
  },

  "blog-post-three": {
    date: "MAR 11",
    title: "Blog Post Three",
    prev: {
      title: "Blog Post Two",
      slug: "blog-post-two",
    },
    next: { title: "Blog Post Four", slug: "blog-post-four" },
    content: [
      "Perfectionism can look like ambition on the outside — high standards, achievement, constant productivity. But internally, it often feels like pressure, self-criticism, and never being able to fully rest.",
      "Many perfectionistic patterns develop as protection. You may have learned that being “good,” “useful,” or “successful” was the safest way to be accepted — or the best way to avoid disappointment, conflict, or shame.",
      "In therapy, we work compassionately with the part of you that feels responsible for holding everything together. You can learn to soften the inner critic, tolerate imperfection, and build a life where your worth isn’t measured by performance.",
    ],
  },

  "blog-post-four": {
    date: "MAR 11",
    title: "Blog Post Four",
    prev: { title: "Blog Post Three", slug: "blog-post-three" },
    content: [
      "Trauma isn’t always one big event. It can also be chronic stress, emotional neglect, painful relationships, or experiences where you didn’t feel safe, seen, or supported — especially over time.",
      "In adults, trauma can show up as hypervigilance, emotional numbness, anxiety, difficulty trusting others, or feeling “stuck” in patterns you understand logically but can’t shift emotionally.",
      "Approaches like EMDR and body-based therapy can help the brain and body process what happened — gently and safely — so that the past stops hijacking the present. Healing is possible, and you don’t have to do it alone.",
    ],
  },
};

export default function BlogPostPage() {
  useFadeInOnScroll();

  const params = useParams();
  const slug = params.slug as string;

  const post = blogData[slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <section className="bg-[#E8F1F7] py-40 text-center text-[#0F2A3A]">
          <h1 className="text-4xl font-semibold">Post not found</h1>
          <Link href="/blog" className="mt-8 inline-block underline">
            Go back to Blog
          </Link>
        </section>
        <Office />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-[#E8F1F7]">
        <div className="mx-auto max-w-5xl px-6 pb-40 pt-36 text-center text-[#0F2A3A]">
          {/* Date */}
          <p className="fade-up delay-200 text-[10px] font-semibold tracking-[0.3em] uppercase text-[#0F2A3A]/80">
            {post.date}
          </p>

          {/* Title */}
          <h1 className="fade-up delay-300 mt-8 text-[56px] font-semibold leading-[1.05] sm:text-[72px]">
            {post.title}
          </h1>

          {/* Paragraphs */}
          <div className="mx-auto mt-16 max-w-2xl space-y-8 text-left text-[16px] leading-8 text-[#0F2A3A]/80 sm:text-[17px]">
            {post.content.map((p, i) => (
              <p key={i} className="fade-up delay-400">
                {p}
              </p>
            ))}
          </div>

          {/* Prev + Next */}
          <div
            className={`mt-40 flex items-center ${
              post.prev && post.next ? "justify-between" : "justify-end"
            }`}
          >
            {post.prev && (
              <Link
                href={`/blog/${post.prev.slug}`}
                className="fade-up delay-500 text-[22px] font-semibold text-[#0F2A3A] hover:opacity-80 sm:text-[28px]"
              >
                <span className="mr-3 font-light">‹</span>
                {post.prev.title}
              </Link>
            )}

            {post.next && (
              <Link
                href={`/blog/${post.next.slug}`}
                className="fade-up delay-500 text-[22px] font-semibold text-[#0F2A3A] hover:opacity-80 sm:text-[28px]"
              >
                {post.next.title}
                <span className="ml-3 font-light">›</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Office />
      <Footer />
    </>
  );
}
