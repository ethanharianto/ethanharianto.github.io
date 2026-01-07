export type ProjectCategory = 'Web' | 'Mobile' | 'AI/ML' | 'Hardware'

export interface Project {
    title: string
    description: string
    tags: string[]
    github: string
    category: ProjectCategory
    // image?: string
}

export const projects: Project[] = [
    {
        title: "NYC Recommendations",
        description: "React app for NYC recommendations.",
        tags: ["React", "Node.js", "Supabase"],
        github: "",
        category: "Web"
    },
    {
        title: "PintOS",
        description: "multi-threaded OS kernel in C, implementing priority scheduling, a synchronized write-back buffer cache, and a virtual memory subsystem with demand paging.",
        tags: ["C", "Operating System", "x86 Assembly"],
        github: "",
        category: "Hardware"
    },
    {
        title: "LyricNet",
        description: "Multimodal Fusion model for lyrical emotion prediction.",
        tags: ["Python", "PyTorch", "BERT", "NLP"],
        github: "",
        category: "AI/ML"
    },
    {
        title: "Coup Reinforcement Learning Agent",
        description: "",
        tags: [""],
        github: "",
        category: "AI/ML"
    },
    {
        title: "Digital Audio Player (FPGA)",
        description: "Verilog‑based audio player with real‑time reverse playback and visualization on a PYNQ‑Z2 FPGA.",
        tags: ["Verilog", "FPGA", "Hardware"],
        github: "",
        category: "Hardware"
    },
    {
        title: "Rock Climbing Route Grader",
        description: "Computer vision-powered mobile utility with offline-first capabilities.",
        tags: ["Python", "PyTorch", "Computer Vision"],
        github: "",
        category: "AI/ML"
    },
    {
        title: "Slide Social (iOS App)",
        description: "iOS social platform built from scratch (80% of codebase). Designed custom image compression that cut costs by >90%. Launched to App Store.",
        tags: ["Swift", "iOS", "Algorithms"],
        github: "",
        category: "Mobile"
    },
    {
        title: "Stanford Pupper",
        description: "",
        tags: [""],
        github: "",
        category: "Hardware"
    },
    {
        title: "SmartGoggles",
        description: "",
        tags: ["iOS", "Swift", "SwiftUI", "Animation", "IOT", "Adafruit"],
        github: "",
        category: "Hardware"
    },
    {
        title: "Thai Elephant Website",
        description: "A lightweight, responsive site built with modern CSS—simple, fast, and clean.",
        tags: ["HTML", "CSS", "Design"],
        github: "https://github.com/ethanharianto/Thai-Elephant-2-Website",
        category: "Web"
    },
    {
        title: "100 Days of SwiftUI",
        description: "A series of small iOS apps exploring SwiftUI patterns and animations.",
        tags: ["Swift", "SwiftUI", "Animation"],
        github: "https://github.com/ethanharianto/100-Days-of-SwiftUI",
        category: "Mobile"
    },
    {
        title: "Slyther (Python Snake Game)",
        description: "A tight Python implementation of Snake with smooth input and grid logic.",
        tags: ["Python", "PyGame"],
        github: "https://github.com/ethanharianto/Slyther",
        category: "Web"
    },
    {
        title: "freeCodeCamp Projects",
        description: "A collection of curriculum projects—HTML/CSS/JS fundamentals and beyond.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/ethanharianto/freeCodeCamp-Projects",
        category: "Web"
    },
    {
        title: "Layered Landscapes",
        description: "A playful HTML/CSS visual—layers, parallax, and subtle motion.",
        tags: ["CSS", "Parallax", "Design"],
        github: "https://github.com/ethanharianto/Layered-Landscapes",
        category: "Web"
    },
    {
        title: "Task Manager (Expo/React Native)",
        description: "A fast, offline‑friendly task manager built with Expo and TypeScript.",
        tags: ["TypeScript", "React Native", "Expo"],
        github: "https://github.com/ethanharianto/task-manager-expo",
        category: "Mobile"
    },
]
