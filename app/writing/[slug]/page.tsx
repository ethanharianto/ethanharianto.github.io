import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

import { getWriting, getWritingBySlug } from "@/lib/content";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { site } from "@/lib/site";

/* Published only. Drafts 404 rather than shipping their placeholder
   meta description to anyone who guesses the URL. */
export function generateStaticParams() {
  return getWriting().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: `${site.url}/writing/${slug}`,
      type: "article",
      publishedTime: post.frontmatter.date,
    },
  };
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <header className="shell pt-40 pb-16 border-b border-[var(--color-hairline)]">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 log link-underline"
        >
          <ArrowLeft size={12} />
          All writing
        </Link>
        <h1 className="display mt-10 text-[clamp(36px,7vw,96px)] text-[var(--color-ink)] max-w-[20ch]">
          {post.frontmatter.title}
        </h1>
        <div className="mt-8 flex items-center gap-4 log">
          <span>
            {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="text-[var(--color-subtle)]">/</span>
          <span>{post.readingTime} min read</span>
        </div>
      </header>

      <div className="shell py-16 md:py-24">
        <div className="prose-case">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-dark-default",
                      keepBackground: false,
                    },
                  ],
                ],
              },
            }}
          />
        </div>
      </div>
    </article>
  );
}
