"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Marquee } from "@/components/ui/Marquee";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <div className="aurora" aria-hidden />

      <div className="shell relative z-[3] flex-1 flex flex-col justify-center pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mono-label mb-8 flex items-center gap-3"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          Available — summer & full-time 2026
        </motion.div>

        <h1 className="display text-[clamp(56px,11vw,172px)] text-[var(--color-ink)] max-w-[14ch]">
          <AnimatedWord text="Reliable" delay={0.05} />{" "}
          <AnimatedWord text="ML" delay={0.15} />
          <br />
          <AnimatedWord text="systems," delay={0.25} />{" "}
          <span className="italic text-[var(--color-accent)]">
            <AnimatedWord text="end" delay={0.35} />
            <AnimatedWord text="-to-" delay={0.42} />
            <AnimatedWord text="end" delay={0.5} />
          </span>
          <span className="caret" aria-hidden />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid gap-10 md:grid-cols-12"
        >
          <p className="md:col-span-6 md:col-start-7 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-ink)] max-w-[48ch]">
            I'm <strong className="font-medium">Ethan Harianto</strong>, a
            software engineer at Stanford (MS CS &amp; BS CS&nbsp;&apos;26)
            building the full ML pipeline — data, training, evaluation, and
            production serving. Recent work: WebRTC conversational agents, RL
            research on prompt compression, and tools for teachers and
            students.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="/work" className="btn btn-primary group">
            View selected work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a href={`mailto:${site.email}`} className="btn group">
            Say hello
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="btn group"
          >
            Résumé (PDF)
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex items-center gap-3 mono-label"
        >
          <ArrowDown size={14} className="text-[var(--color-accent)]" />
          Scroll for selected work
        </motion.div>
      </div>

      <Marquee
        items={[
          "Software Engineer",
          "ML Systems",
          "Stanford MS CS ’26",
          "WebRTC + LLM pipelines",
          "Research → Production",
          "Swift · Go · TypeScript · Python",
        ]}
      />
    </section>
  );
}

function AnimatedWord({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden align-baseline">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
}
