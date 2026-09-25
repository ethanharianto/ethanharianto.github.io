export interface ExperienceEntry {
  company: string;
  title: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  href?: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Pantheon Lab",
    title: "Junior Software Developer",
    location: "Hong Kong SAR",
    period: "Jun 2025 – Aug 2025",
    description:
      "Built the voice pipeline behind an API-first conversational assistant, and the portal other developers used to get a key.",
    achievements: [
      "Built STT→LLM→TTS→Lip-Sync pipeline on WebRTC; deployed across multiple regions.",
      "Implemented secure Go backend with rate-limiting and quotas; ensured high availability.",
      "Launched Next.js self-service developer portal for API key registration (hours → minutes).",
    ],
    technologies: ["Go", "Next.js", "WebRTC", "System Architecture"],
  },
  {
    company: "Develop for Good",
    title: "Engineering Lead",
    location: "Remote",
    period: "May 2025 – Jul 2025",
    description:
      "Led a no-cost WordPress workflow and shipped chapter tooling for 50+ global chapters.",
    achievements: [
      "Devised no-cost development/collaboration workflow; eliminated server fees.",
      "Built member dashboards and chapter management; reduced admin time ~8 hrs/week.",
    ],
    technologies: ["WordPress", "JavaScript", "Workflow Automation"],
  },
  {
    company: "Stanford PinCS Lab",
    title: "Research Assistant",
    location: "Stanford, CA",
    period: "Mar 2025 – Jun 2025",
    description:
      "Built an accessibility-first iOS transcription app powered by AssemblyAI.",
    achievements: [
      "Prototyped memory recall aid for early-stage Alzheimer's patients.",
      "Implemented high-contrast modes, scalable fonts, and intuitive single-tap navigation.",
    ],
    technologies: ["Swift", "SwiftUI", "Mobile UX"],
  },
];
