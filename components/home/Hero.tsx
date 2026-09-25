"use client";

import { motion } from "framer-motion";

import { Marquee } from "@/components/ui/Marquee";
import { Slot } from "@/components/ui/Slot";
import { useSiteContent } from "@/components/providers/ContentProvider";

/**
 * The run's first screen.
 *
 * Headline, lede, evidence, actions. All copy comes from `@/lib/copy`
 * — nothing is written inline here.
 *
 * What was removed and shouldn't come back:
 *   - the blurred aurora (a gradient wash doing nothing)
 *   - the `Founding engineer` chip + `Pear Prime '26` pill (a badge strip
 *     of credentials, which is the genre's habit)
 *   - the all-caps availability eyebrow
 *   - the accent-italic "whole" (accenting one word in a headline is a
 *     named tell, and the signal colour is for plotted lines)
 *   - the reward-curve plot, its phase-of-a-training-run axis, and the
 *     monospace key/value evidence log — a page that opens on a chart
 *     and a log line reads as a model card, not a person. The headline
 *     already makes the claim; it doesn't need an instrument panel
 *     underneath it to back it up.
 */
export function Hero() {
  const { hero, site } = useSiteContent();

  return (
    <section className="relative min-h-[100svh] flex flex-col">
      <div className="shell relative flex-1 flex flex-col justify-center pt-28 pb-12">
        <h1 className="display text-[length:var(--text-hero)] text-[var(--color-ink)] max-w-[15ch]">
          {hero.headline}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
        >
          <Slot slot={hero.lede} className="prose mt-7 text-[length:var(--text-lede)]" />
        </motion.div>

        {/* ── The evidence, said plainly ───────────────────────── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex flex-wrap items-baseline gap-x-2 gap-y-1.5 text-[15px] leading-relaxed text-[var(--color-muted)] border-t border-[var(--color-hairline)] pt-3.5"
        >
          {hero.evidence
            .filter((f) => f.v)
            .map((f, i, arr) => (
              <span key={f.k} className="inline-flex items-baseline gap-2">
                <span>
                  {f.k} <span className="text-[var(--color-ink)]">{f.v}</span>
                </span>
                {i < arr.length - 1 && (
                  <span aria-hidden className="text-[var(--color-hairline-strong)]">
                    ·
                  </span>
                )}
              </span>
            ))}
        </motion.p>

        {/* ── The two things you can do ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <a href="/work" className="btn btn-primary">
            Read the work
          </a>
          <a href={`mailto:${site.email}`} className="btn">
            Email me
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-[15px] text-[var(--color-muted)] hover:text-[var(--color-ink)] ml-1"
          >
            Résumé (PDF)
          </a>
        </motion.div>
      </div>

      <Marquee items={hero.marquee} />
    </section>
  );
}
