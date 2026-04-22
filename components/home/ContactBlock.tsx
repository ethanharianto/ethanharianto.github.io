import { ArrowUpRight, Mail, Github, Linkedin, FileText } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function ContactBlock() {
  const channels = [
    {
      name: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: <Mail size={16} />,
    },
    {
      name: "GitHub",
      value: "github.com/ethanharianto",
      href: site.social.github,
      icon: <Github size={16} />,
    },
    {
      name: "LinkedIn",
      value: "in/ethan-harianto",
      href: site.social.linkedin,
      icon: <Linkedin size={16} />,
    },
    {
      name: "Résumé",
      value: "PDF · One page",
      href: site.resume,
      icon: <FileText size={16} />,
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-40 relative">
      <div className="shell">
        <Reveal>
          <p className="mono-label mb-6">
            <span className="text-[var(--color-accent)]">05</span> &nbsp; Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display text-[clamp(48px,10vw,160px)] leading-[0.95] text-[var(--color-ink)] max-w-[14ch]">
            Let's build <span className="italic text-[var(--color-accent)]">something</span> together.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-[17px] md:text-[19px] leading-relaxed text-[var(--color-muted)]">
            I&apos;m looking for a full-time founding-engineer role at an
            early-stage, ambitious team, starting 2026 — joining Pear
            Prime &apos;26 this year. Reach out if you&apos;re building
            something consequential.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-14 grid sm:grid-cols-2 gap-3">
            {channels.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target={c.name === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 px-6 py-5 rounded-xl border border-[var(--color-hairline)] hover:border-[var(--color-ink)] hover:bg-[rgba(250,250,247,0.02)] transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-[var(--color-hairline)] text-[var(--color-muted)] group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors">
                    {c.icon}
                  </span>
                  <span>
                    <span className="mono-label block">{c.name}</span>
                    <span className="text-[15px] text-[var(--color-ink)]">
                      {c.value}
                    </span>
                  </span>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[var(--color-subtle)] group-hover:text-[var(--color-ink)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
