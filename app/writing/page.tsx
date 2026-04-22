import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getWriting } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Short essays on the things I'm building, reading, and learning.",
};

export default function WritingIndexPage() {
  const posts = getWriting();

  return (
    <div className="shell pt-40 pb-20">
      <div className="max-w-3xl mb-16">
        <p className="mono-label mb-5">
          <span className="text-[var(--color-accent)]">Index</span> &nbsp; Writing
        </p>
        <h1 className="display text-[clamp(48px,9vw,128px)] text-[var(--color-ink)]">
          Notes from the <span className="italic text-[var(--color-accent)]">workbench</span>.
        </h1>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-muted)] max-w-2xl">
          Occasional essays on things I'm building and the rabbit holes they
          pull me into. Usually short, sometimes technical, always written for
          my future self.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-[var(--color-muted)]">Nothing published yet.</p>
      ) : (
        <div className="divide-y divide-[var(--color-hairline)] border-y border-[var(--color-hairline)]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group grid md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 transition-colors hover:bg-[rgba(250,250,247,0.02)] -mx-[clamp(16px,4vw,40px)] px-[clamp(16px,4vw,40px)]"
            >
              <div className="md:col-span-2">
                <p className="mono-label">
                  {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-xl md:text-2xl tracking-[-0.02em] group-hover:text-[var(--color-accent)] transition-colors">
                  {post.frontmatter.title}
                </h3>
                <p className="mt-2 text-[15px] text-[var(--color-muted)] max-w-2xl">
                  {post.frontmatter.description}
                </p>
              </div>
              <div className="md:col-span-2 flex items-center gap-2 md:justify-end mono-label">
                {post.readingTime} min
                <ArrowUpRight
                  size={12}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
