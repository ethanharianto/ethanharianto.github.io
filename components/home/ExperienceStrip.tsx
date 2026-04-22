import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/experience";

export function ExperienceStrip() {
  return (
    <section id="experience" className="py-28 md:py-40 relative">
      <div className="shell">
        <SectionHeader
          index="03"
          label="Experience"
          title="Where I've been working."
        />

        <div className="divide-y divide-[var(--color-hairline)] border-y border-[var(--color-hairline)]">
          {experience.map((e, idx) => (
            <Reveal
              key={e.company}
              delay={idx * 0.05}
              className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10"
            >
              <div className="md:col-span-2">
                <p className="mono-label">{e.period}</p>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-2xl md:text-3xl tracking-[-0.02em]">
                  {e.company}
                </h3>
                <p className="mt-1 text-[var(--color-muted)]">
                  {e.title} · {e.location}
                </p>
                <p className="mt-4 text-[15px] text-[var(--color-ink)] max-w-xl">
                  {e.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-[14px] text-[var(--color-muted)] max-w-xl">
                  {e.achievements.map((a, i) => (
                    <li key={i} className="flex gap-3">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
