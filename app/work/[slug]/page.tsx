import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

import { getCaseStudies, getCaseStudyBySlug } from "@/lib/content";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { mdxComponents } from "@/components/mdx/MdxComponents";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getCaseStudies().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: study.frontmatter.title,
    description: study.frontmatter.description,
    openGraph: {
      title: `${study.frontmatter.title} — Case study`,
      description: study.frontmatter.description,
      url: `${site.url}/work/${slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const all = getCaseStudies();
  const idx = all.findIndex((s) => s.slug === slug);
  const prev =
    idx > 0
      ? { slug: all[idx - 1].slug, title: all[idx - 1].frontmatter.title }
      : null;
  const next =
    idx < all.length - 1
      ? { slug: all[idx + 1].slug, title: all[idx + 1].frontmatter.title }
      : null;

  return (
    <CaseStudyLayout
      frontmatter={study.frontmatter}
      slug={slug}
      prev={prev}
      next={next}
    >
      <MDXRemote
        source={study.content}
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
    </CaseStudyLayout>
  );
}
