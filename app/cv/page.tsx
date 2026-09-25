import type { Metadata } from "next";
import { Download, Mail, ArrowUpRight } from "lucide-react";

import { experience } from "@/lib/experience";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "CV",
  description: "Ethan Harianto — curriculum vitae and professional summary.",
};

const education = [
  {
    school: "Stanford University",
    degree: "M.S. Computer Science",
    period: "2025 – 2026",
    note: "Coterminal MS, concentration in AI & Systems.",
  },
  {
    school: "Stanford University",
    degree: "B.S. Computer Science",
    period: "2022 – 2026",
    note: "Honors in the Major (in progress). Relevant coursework: distributed systems, operating systems, deep learning, reinforcement learning, computer vision, NLP.",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Go", "TypeScript", "Swift", "C/C++", "SQL"],
  },
  {
    title: "Backend & systems",
    items: [
      "Distributed systems",
      "API design (REST / gRPC)",
      "WebRTC",
      "Docker / containers",
      "Caching (Redis)",
      "Postgres / Supabase",
    ],
  },
  {
    title: "Frontend & mobile",
    items: [
      "React / Next.js",
      "React Native / Expo",
      "SwiftUI / UIKit",
      "Tailwind CSS",
      "Design systems",
    ],
  },
  {
    title: "Data & AI",
    items: [
      "PyTorch",
      "Hugging Face",
      "LLM integration",
      "Reinforcement learning",
      "Computer vision",
      "NumPy / Pandas / Polars",
    ],
  },
];

export default function CvPage() {
  return (
    <div className="shell pt-40 pb-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
        <div className="max-w-3xl">
          <p className="log mb-5">
            <span className="text-[var(--color-accent)]">Document</span> &nbsp; /cv
          </p>
          <h1 className="display text-[clamp(48px,9vw,128px)] text-[var(--color-ink)]">
            Ethan Harianto.
          </h1>
          <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-muted)]">
            Stanford MS &amp; BS CS&nbsp;&apos;26. Pear Prime&nbsp;&apos;26. Based
            in the San Francisco Bay Area.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <Download size={14} />
            Download PDF
          </a>
          <a href={`mailto:${site.email}`} className="btn">
            <Mail size={14} />
            Email me
          </a>
        </div>
      </div>

      <Section title="Education">
        <div className="divide-y divide-[var(--color-hairline)] border-y border-[var(--color-hairline)]">
          {education.map((e) => (
            <div
              key={`${e.school}-${e.degree}`}
              className="grid md:grid-cols-12 gap-4 md:gap-8 py-6"
            >
              <div className="md:col-span-2 log">{e.period}</div>
              <div className="md:col-span-6">
                <p className="text-xl tracking-[-0.02em]">{e.school}</p>
                <p className="text-[var(--color-muted)]">{e.degree}</p>
              </div>
              <p className="md:col-span-4 text-[14px] text-[var(--color-muted)] md:text-right">
                {e.note}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Programs & recognition">
        <div className="divide-y divide-[var(--color-hairline)] border-y border-[var(--color-hairline)]">
          <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-6">
            <div className="md:col-span-2 log">2026</div>
            <div className="md:col-span-6">
              <p className="text-xl tracking-[-0.02em]">Pear Prime &apos;26</p>
              <p className="text-[var(--color-muted)]">
                Pear VC&apos;s selective student-founder program.
              </p>
            </div>
            <p className="md:col-span-4 text-[14px] text-[var(--color-muted)] md:text-right">
              Working on zero-to-one product alongside other student founders.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Experience">
        <div className="divide-y divide-[var(--color-hairline)] border-y border-[var(--color-hairline)]">
          {experience.map((e) => (
            <div
              key={e.company}
              className="grid md:grid-cols-12 gap-4 md:gap-8 py-8"
            >
              <div className="md:col-span-2 log">{e.period}</div>
              <div className="md:col-span-6">
                <p className="text-xl tracking-[-0.02em]">{e.company}</p>
                <p className="text-[var(--color-muted)]">
                  {e.title} · {e.location}
                </p>
                <ul className="mt-4 space-y-1.5 text-[14px] text-[var(--color-muted)] max-w-xl">
                  {e.achievements.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span className="text-[var(--color-accent)] mt-1.5">·</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-4 flex flex-wrap gap-1.5 md:justify-end md:items-start">
                {e.technologies.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6"
            >
              <p className="log mb-4">{g.title}</p>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="mt-20 flex items-center justify-between border-t border-[var(--color-hairline)] pt-8 log">
        <span>{site.location}</span>
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 link-underline"
        >
          Full LinkedIn
          <ArrowUpRight size={12} />
        </a>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20">
      <h2 className="log mb-6 flex items-center gap-3">
        <span className="text-[var(--color-accent)]">§</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
