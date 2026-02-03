import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    slug: "blog-post-one",
    date: "3/11/19",
    title: "When Anxiety Feels Like It Never Turns Off",
    image: "/8.jpg",
  },
  {
    slug: "blog-post-two",
    date: "3/11/19",
    title: "Burnout Isn’t Laziness — It’s Your Nervous System Asking for Help",
    image: "/pexels.jpg",
  },
  {
    slug: "blog-post-three",
    date: "3/11/19",
    title: "Perfectionism and the Fear Underneath It",
    image: "/9.jpg",
  },
  {
    slug: "blog-post-four",
    date: "3/11/19",
    title: "What Trauma Can Look Like in Adults (Even Years Later)",
    image: "/11.jpg",
  },
];

export default function BlogPosts() {
  return (
    <section className="bg-[#E8F1F7] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          {posts.map((post) => (
            <article key={post.slug} className="fade-up delay-200 text-[#0F2A3A]">
              {/* ✅ Image clickable */}
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-[340px] w-full overflow-hidden bg-[#F4F8FB] sm:h-[420px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </div>
              </Link>

              {/* Meta */}
              <p className="mt-6 text-xs font-semibold tracking-wide text-[#0F2A3A]/80">
                {post.date}
              </p>

              {/* ✅ Title clickable */}
              <Link href={`/blog/${post.slug}`}>
                <h2 className="mt-5 text-[44px] font-semibold leading-[1.05] text-[#0F2A3A] hover:opacity-80">
                  {post.title}
                </h2>
              </Link>

              {/* ✅ Read More clickable */}
              <Link
                href={`/blog/${post.slug}`}
                className="mt-10 inline-block text-sm text-[#0F2A3A] underline underline-offset-4 hover:opacity-80"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
