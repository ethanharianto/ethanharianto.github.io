import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getWriting } from "@/lib/content";
import { site } from "@/lib/site";

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
        <p className="log mb-5">
          <span className="text-[var(--color-accent)]">Index</span> &nbsp; Writing
        </p>
        <h1 className="display text-[clamp(48px,9vw,128px)] text-[var(--color-ink)]">
          Notes from the workbench.
        </h1>
        <p className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-muted)] max-w-2xl">
          Occasional essays on things I'm building and the rabbit holes they
          pull me into. Usually short, sometimes technical, always written for
          my future self.
        </p>
      </div>

      {posts.length === 0 ? (
        /* An empty index is an invitation, not an apology. The first
           post is the RL write-up, which already exists as a case
           study — so point at that rather than at nothing. */
        <div className="border-t border-[var(--color-hairline)] max-w-2xl">
          <p className="log pt-6">No essays yet</p>
          <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-muted)]">
            The writing is coming. In the meantime the long version of the
            reward-design work is already up as a case study, and it&apos;s
            the same argument with the numbers left in.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 pb-6">
            <Link href="/work/rl-prompt-compression" className="btn btn-primary">
              Read the reward-design case study
            </Link>
            <a href={`mailto:${site.email}`} className="btn">
              Email me
            </a>
          </div>
        </div>
      ) : (
        <div className="divide-y divide-[var(--color-hairline)] border-y border-[var(--color-hairline)]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group grid md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 transition-colors hover:bg-[rgba(250,243,221,0.02)] -mx-[clamp(16px,4vw,40px)] px-[clamp(16px,4vw,40px)]"
            >
              <div className="md:col-span-2">
                <p className="log">
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
              <div className="md:col-span-2 flex items-center gap-2 md:justify-end log">
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
