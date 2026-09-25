"use client";

import { motion } from "framer-motion";

import { Marquee } from "@/components/ui/Marquee";
import { RewardCurve } from "@/components/ui/RewardCurve";
import { Slot } from "@/components/ui/Slot";
import { hero } from "@/lib/copy";
import { site } from "@/lib/site";

/**
 * The run's first screen.
 *
 * Curve (the claim), headline, lede, evidence, actions. All copy comes
 * from `@/lib/copy` — nothing is written inline here.
 *
 * What was removed and shouldn't come back:
 *   - the blurred aurora (a gradient wash doing nothing)
 *   - the `Founding engineer` chip + `Pear Prime '26` pill (a badge strip
 *     of credentials, which is the genre's habit)
 *   - the all-caps availability eyebrow
 *   - the accent-italic "whole" (accenting one word in a headline is a
 *     named tell, and the signal colour is for plotted lines)
 */
export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col">
      <div className="shell relative flex-1 flex flex-col justify-center pt-28 pb-12">
        {/* ── The claim, as a plot ─────────────────────────────── */}
        <RewardCurve
          draw
          duration={1.4}
          delay={0.15}
          className="w-full h-[92px] md:h-[124px] mb-1"
          label="Reward curve rising in steps across a training run"
          stops={[
            { at: 0.0, value: 0.06 },
            { at: 0.14, value: 0.14 },
            { at: 0.24, value: 0.22 },
            { at: 0.38, value: 0.39 },
            { at: 0.47, value: 0.44 },
            { at: 0.61, value: 0.63 },
            { at: 0.72, value: 0.71 },
            { at: 0.86, value: 0.88 },
            { at: 0.95, value: 0.93 },
            { at: 1.0, value: 0.96 },
          ]}
        />

        {/* x-axis: the phases of one run. The curve isn't decoration
            on top of the page — it *is* the page map. */}
        <div className="hidden md:grid grid-cols-5 gap-4 border-t border-[var(--color-hairline)] pt-1.5 mb-6">
          {hero.phases.map((t) => (
            <span key={t} className="log">
              {t}
            </span>
          ))}
        </div>

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

        {/* ── The evidence ──────────────────────────────────────── */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex flex-wrap gap-x-10 gap-y-3 border-t border-[var(--color-hairline)] pt-3.5"
        >
          {hero.evidence
            .filter((f) => f.v)
            .map((f) => (
              <div key={f.k} className="flex items-baseline gap-2.5">
                <dt className="log-key">{f.k}</dt>
                <dd className="log-val">{f.v}</dd>
              </div>
            ))}
        </motion.dl>

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
