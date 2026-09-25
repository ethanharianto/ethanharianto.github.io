import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { Newsreader } from "next/font/google";

import { SiteShell } from "@/components/chrome/SiteShell";
import { Footer } from "@/components/chrome/Footer";
import { ContentProvider } from "@/components/providers/ContentProvider";
import { getContentOverrides } from "@/lib/content/resolve.server";
import { buildResolvedContent } from "@/lib/content/shape";
import { site } from "@/lib/site";
import "./globals.css";

// Metadata reads whatever's saved in the admin — same resolved content
// as everything else — so an edited name/title/description shows up in
// the tab title and social previews without a code change.
export async function generateMetadata(): Promise<Metadata> {
  const overrides = await getContentOverrides();
  const { site: resolvedSite } = buildResolvedContent(overrides);

  return {
    metadataBase: new URL(resolvedSite.url),
    title: {
      default: resolvedSite.title,
      template: `%s — ${resolvedSite.name}`,
    },
    description: resolvedSite.description,
    keywords: [
      "Ethan Harianto",
      "Software Engineer",
      "Systems Engineering",
      "Machine Learning",
      "Pear Prime",
      "Stanford",
    ],
    authors: [{ name: resolvedSite.name, url: resolvedSite.url }],
    creator: resolvedSite.name,
    openGraph: {
      type: "website",
      url: resolvedSite.url,
      title: resolvedSite.title,
      description: resolvedSite.description,
      siteName: resolvedSite.name,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedSite.title,
      description: resolvedSite.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0b0d0f",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.social.github, site.social.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Stanford University",
  },
  jobTitle: "Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco Bay Area",
    addressCountry: "US",
  },
};

/**
 * Newsreader carries display AND prose. Its optical-size axis means
 * `font-optical-sizing: auto` gives a 156px headline crisp hairlines
 * and a 19px paragraph the sturdier shapes it needs — one family
 * doing two jobs, which is the whole point.
 *
 * Geist Sans is gone entirely. Two families is the budget: this
 * argues, Geist Mono records.
 */
const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  /* `variable`, not a list of weights. Discrete weights make next/font
     fetch static instances, where the opsz axis does nothing — and the
     optical sizing is the entire reason for picking this family. */
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  axes: ["opsz"],
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const overrides = await getContentOverrides();
  const content = buildResolvedContent(overrides);

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 z-[60] px-3 py-2 bg-[var(--color-ink)] text-[var(--color-canvas)] rounded"
        >
          Skip to content
        </a>
        <ContentProvider value={content}>
          <SiteShell footer={<Footer />}>{children}</SiteShell>
        </ContentProvider>
      </body>
    </html>
  );
}
