import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

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
    "ML Systems",
    "Stanford",
    "Portfolio",
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
  themeColor: "#0a0a0b",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
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
