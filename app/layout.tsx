import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { Newsreader } from "next/font/google";

import { SiteShell } from "@/components/chrome/SiteShell";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s — Ethan Harianto",
  },
  description: site.description,
  keywords: [
    "Ethan Harianto",
    "Software Engineer",
    "Systems Engineering",
    "Machine Learning",
    "Pear Prime",
    "Stanford",
  ],
  authors: [{ name: "Ethan Harianto", url: site.url }],
  creator: "Ethan Harianto",
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
