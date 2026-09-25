import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { getWriting } from "@/lib/content";
import { sections } from "@/lib/copy";

export function WritingPreview() {
  const posts = getWriting().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section id="writing" className="py-28 md:py-40 relative">
      <div className="shell">
        <SectionHeader
          index="04"
          label={sections.writing.label}
          title={sections.writing.title}
          description={sections.writing.description}
          action={
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 link-underline text-[var(--color-ink)]"
            >
              All writing
              <ArrowUpRight size={14} />
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, idx) => (
            <Reveal key={post.slug} delay={idx * 0.06}>
              <Link
                href={`/writing/${post.slug}`}
                className="group block h-full border border-[var(--color-hairline)] rounded-xl p-6 hover:border-[var(--color-hairline-strong)] hover:bg-[rgba(250,243,221,0.02)] transition-colors"
              >
                <p className="log mb-6">
                  {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  · {post.readingTime} min read
                </p>
                <h3 className="text-xl md:text-2xl tracking-[-0.02em] group-hover:text-[var(--color-accent)] transition-colors">
                  {post.frontmatter.title}
                </h3>
                <p className="mt-3 text-[15px] text-[var(--color-muted)] line-clamp-3">
                  {post.frontmatter.description}
                </p>
                <span className="mt-8 log group-hover:text-[var(--color-ink)] inline-flex items-center gap-1">
                  Read
                  <ArrowUpRight size={12} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
