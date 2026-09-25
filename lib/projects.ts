export type ProjectCategory = "Web" | "Mobile" | "AI/ML" | "Hardware";

export interface Project {
  slug: string;
  title: string;
  role?: string;
  year?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  github?: string;
  demoUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
  accent?: string;
  images?: string[];
  challenges?: string[];
  outcomes?: string[];
}

export const projects: Project[] = [
  {
    slug: "veridian",
    title: "Veridian",
    role: "Founding engineer",
    year: "2025",
    description:
      "A teacher uploads a PDF; parallel workers convert it to LaTeX and detect the problems, and a model annotates each student's mistake directly on their canvas. Teacher app in React, student app in Expo, one Supabase behind both.",
    longDescription:
      "Full-stack platform where teachers create classrooms and assignments (PDF→LaTeX conversion and problem detection), manage a corpus, and students work through problems on a canvas with LLM-powered mistake analysis, red-dot annotations, and Socratic chat. Shared Supabase backend; Veridian design system (forest theme, design tokens) on teacher and student UIs.",
    tags: [
      "React",
      "TypeScript",
      "Flask",
      "Python",
      "Supabase",
      "Expo",
      "Socket.IO",
    ],
    category: "Web",
    featured: true,
    challenges: [
      "Orchestrating PDF→LaTeX conversion with parallel workers and AI problem detection.",
      "Mistake-analysis pipeline: OCR, LLM analysis, verification, reconciliation, and coordinate detection for overlay.",
      "Unifying design tokens and UI primitives across a teacher (React) and student (Expo) app.",
    ],
    outcomes: [
      "Teachers create assignments from PDFs in seconds with auto-detected problems.",
      "Students get annotated mistake feedback and Socratic tutoring in one flow.",
      "Single design system and shared Supabase across teacher and student apps.",
    ],
  },
  {
    slug: "rl-prompt-compression",
    title: "RL-Based Prompt Compression",
    role: "Researcher",
    year: "2025",
    description:
      "Reward design, not search algorithm, moved the compression–faithfulness tradeoff: 74% of tokens dropped with 90–95% of task F1 kept, and MCTS matched a harmonic run twice its length. CS 234.",
    longDescription:
      "Reward design for RL-based prompt compression with a frozen DistilRoBERTa encoder and a trainable head that emits binary keep/drop decisions. Identified and addressed two reward pathologies: keep/drop asymmetry in per-token KL rewards and faithfulness mismatch from ground-truth comparison. A 2×2×2 factorial over algorithm (REINFORCE, MCTS), reward (harmonic, gated), and learning rate showed that reward function choice had a larger effect than algorithm on the compression–faithfulness tradeoff.",
    tags: ["Python", "PyTorch", "Reinforcement Learning", "LLM", "NLP"],
    github: "https://github.com/ethanfarah/cs234-submission",
    category: "AI/ML",
    featured: true,
    outcomes: [
      "Outperforms LLMLingua-2 on SQuAD 2.0 (different evaluation protocols).",
      "Best config: 74% compression, 90–95% task F1 preserved.",
      "MCTS+CE at 2,000 episodes surpasses 4,000-episode harmonic baseline on all metrics (≈2× sample efficiency).",
    ],
  },
  {
    slug: "pantheon-webrtc",
    title: "Pantheon Conversational Stack",
    role: "Junior Software Developer",
    year: "2025",
    description:
      "STT → LLM → TTS → lip-sync over WebRTC, running in more than one region. The self-service developer portal I shipped cut API-key onboarding from hours to minutes.",
    longDescription:
      "Shipped core pieces of a real-time conversational assistant platform at Pantheon Lab: built a multi-region STT→LLM→TTS→Lip-Sync pipeline on WebRTC, implemented a secure Go backend with rate-limiting and quotas, and launched a Next.js self-service developer portal that cut API key onboarding from hours to minutes.",
    tags: ["Go", "Next.js", "WebRTC", "System Architecture"],
    category: "Web",
    featured: true,
    outcomes: [
      "Multi-region WebRTC pipeline in production.",
      "Secure Go backend with per-key rate limits, quotas, and high availability.",
      "Self-service key onboarding: hours → minutes.",
    ],
  },
  {
    slug: "aboard-the-icarus",
    title: "Aboard the Icarus",
    year: "2024",
    description:
      "You dictate your move; the model writes the next scene from your character's stats and what you're carrying.",
    longDescription:
      "A web app that uses LLMs to generate text-adventure-style games. Users dictate the story with their responses and the LLM generates the next scene based on the user's stats and current status.",
    tags: ["React", "Node.js", "Gemini", "Gemma"],
    github: "https://github.com/ethanharianto/aboard-the-icarus",
    category: "Web",
  },
  {
    slug: "nyc-recommendations",
    title: "NYC Recommendations",
    year: "2024",
    description:
      "Curated NYC spots, filterable by category and plotted on a map, over local-first data so the guide opens without waiting on a server.",
    longDescription:
      "A curated guide to the best spots in NYC, built with a focus on performance and local-first data. Users can filter by category and view on a map.",
    tags: ["React", "Node.js", "Supabase"],
    category: "Web",
  },
  {
    slug: "pintos",
    title: "PintOS",
    year: "2024",
    description:
      "Multi-threaded OS kernel in C: priority scheduling, a synchronized write-back buffer cache, and virtual memory with demand paging.",
    longDescription:
      "A comprehensive operating system kernel project implementing core OS functionality. Required deep understanding of low-level memory management, concurrency, and scheduling.",
    tags: ["C", "Operating Systems", "x86 Assembly"],
    category: "Hardware",
  },
  {
    slug: "lyricnet",
    title: "LyricNet",
    year: "2023",
    description:
      "Fuses BERT embeddings of the lyrics with audio features to predict a song's emotional valence and arousal.",
    longDescription:
      "A research project at the intersection of NLP and music information retrieval. The model predicts the emotional valence and arousal of a song based on its lyrics and audio features.",
    tags: ["Python", "PyTorch", "BERT", "NLP"],
    github: "https://github.com/ethanharianto/LyricNet-CS230",
    category: "AI/ML",
  },
  {
    slug: "coup-rl",
    title: "Coup RL Agent",
    year: "2024",
    description:
      "A Q-learning agent learns to bluff and call bluffs at Coup, training entirely by self-play — it supplies its own opponents.",
    longDescription:
      "A Q-learning agent capable of playing the social-deduction game Coup. The agent learns optimal strategies for bluffing and calling bluffs through self-play.",
    tags: ["Python", "Reinforcement Learning"],
    github: "https://github.com/davidmaemoto/CoupBot",
    category: "AI/ML",
  },
  {
    slug: "digital-audio-fpga",
    title: "Digital Audio Player (FPGA)",
    year: "2023",
    description:
      "Verilog-based audio player with real-time reverse playback and visualization on a PYNQ-Z2.",
    longDescription:
      "Hardware design project implementing a fully functional digital audio player on an FPGA. Features include playback control, volume adjustment, and real-time frequency visualization.",
    tags: ["Verilog", "FPGA", "Hardware"],
    category: "Hardware",
  },
  {
    slug: "route-grader",
    title: "Rock Climbing Route Grader",
    year: "2024",
    description:
      "Computer vision on climbing holds, to grade a route without a guidebook. Built offline-first, for home walls.",
    longDescription:
      "A mobile application that uses computer vision to analyze climbing holds and suggest a difficulty grade. Built for climbers who want to grade their home wall problems.",
    tags: ["Python", "PyTorch", "Computer Vision"],
    github:
      "https://cs231n.stanford.edu/2024/papers/related-task-self-supervised-learning-for-rock-climbing-route-ra.pdf",
    category: "AI/ML",
    images: ["/route_grader_preview.png"],
  },
  {
    slug: "slide-social",
    title: "Slide Social",
    year: "2023",
    description:
      "iOS social platform built from scratch (80% of codebase). Custom image compression cut costs by >90%. Shipped to the App Store.",
    longDescription:
      "A full-featured social networking app focused on photo sharing. Built with Swift and UIKit/SwiftUI, with a custom backend.",
    tags: ["Swift", "iOS", "Algorithms"],
    category: "Mobile",
    images: ["/slide_social_preview.png"],
    challenges: [
      "Custom image compression algorithm to reduce bandwidth costs.",
      "Managing complex social-graph relationships efficiently.",
    ],
    outcomes: [
      "Launched to the App Store with 100+ active users.",
      "Reduced Firebase costs by 90% via compression.",
    ],
  },
  {
    slug: "stanford-pupper",
    title: "Stanford Pupper",
    year: "2023",
    description:
      "Assembled and calibrated the Stanford Pupper, then retuned its gait parameters until the walk held.",
    longDescription:
      "Assembly and programming of the Stanford Pupper robot. Involved calibrating the physical build and tweaking gait algorithms for stability.",
    tags: ["Hardware", "Robotics", "Python"],
    category: "Hardware",
  },
  {
    slug: "smartgoggles",
    title: "SmartGoggles",
    year: "2022",
    description:
      "Distance sensors mapped to haptic pulses: the wearer is told what's ahead without looking up.",
    longDescription:
      "A wearable device equipped with distance sensors that provides haptic feedback to the wearer, alerting them of obstacles.",
    tags: ["iOS", "Swift", "SwiftUI", "IoT", "Adafruit"],
    category: "Hardware",
  },
  {
    slug: "thai-elephant",
    title: "Thai Elephant Website",
    year: "2022",
    description:
      "A restaurant site in plain HTML and CSS — grid layout, no framework, and it still opens fast on a phone.",
    longDescription:
      "A restaurant website focused on visual appeal and performance. Modern CSS grid/flexbox layouts and high-quality imagery.",
    tags: ["HTML", "CSS", "Design"],
    github: "https://github.com/ethanharianto/Thai-Elephant-2-Website",
    category: "Web",
  },
  {
    slug: "100-days-swiftui",
    title: "100 Days of SwiftUI",
    year: "2022",
    description:
      "A year of small iOS apps, one a day, mostly for working out how SwiftUI wants to be used.",
    longDescription:
      "Daily challenges from the 100 Days of SwiftUI curriculum, building fluency with declarative UI.",
    tags: ["Swift", "SwiftUI", "Animation"],
    github: "https://github.com/ethanharianto/100-Days-of-SwiftUI",
    category: "Mobile",
  },
  {
    slug: "freecodecamp",
    title: "freeCodeCamp Projects",
    year: "2020",
    description:
      "HTML, CSS, and JavaScript projects from the freeCodeCamp curriculum — the fundamentals, built one at a time.",
    longDescription:
      "Various web projects demonstrating proficiency in core web technologies.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ethanharianto/freeCodeCamp-Projects",
    category: "Web",
  },
];

export const categories: (ProjectCategory | "All")[] = [
  "All",
  "Web",
  "Mobile",
  "AI/ML",
  "Hardware",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects() {
  return projects.filter((p) => p.featured);
}
