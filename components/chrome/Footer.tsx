import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { site } from "@/lib/site";
import { Wordmark } from "@/components/brand/Wordmark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-[var(--color-hairline)] pt-20 pb-12">
      <div className="shell grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <Link href="/" className="inline-block text-4xl leading-none">
            <Wordmark />
          </Link>
          <p className="text-[var(--color-muted)] max-w-sm text-[15px] leading-relaxed">
            {site.description}
          </p>
          <p className="log">Based in {site.location.toLowerCase()}.</p>
        </div>

        <div className="md:col-span-4 grid grid-cols-2 gap-8">
          <div className="space-y-3">
            <p className="log">Pages</p>
            <ul className="space-y-2 text-[15px]">
              {site.nav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="link-underline text-[var(--color-ink)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="log">Elsewhere</p>
            <ul className="space-y-2 text-[15px]">
              <li>
                <a
                  className="link-underline inline-flex items-center gap-1"
                  href={site.social.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  className="link-underline inline-flex items-center gap-1"
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  className="link-underline inline-flex items-center gap-1"
                  href={`mailto:${site.email}`}
                >
                  Email <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  className="link-underline inline-flex items-center gap-1"
                  href={site.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume (PDF) <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3 flex md:justify-end items-end">
          <a
            href={`mailto:${site.email}`}
            className="btn btn-accent group"
            aria-label="Email Ethan"
          >
            Start a conversation
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <div className="shell mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-mono tracking-widest uppercase text-[var(--color-subtle)]">
        <span>© {year} Ethan Harianto. All rights reserved.</span>
        <span>Built with Next.js · Shipped on Vercel</span>
      </div>
    </footer>
  );
}
