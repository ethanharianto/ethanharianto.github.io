export type ProjectCategory = 'Web' | 'Mobile' | 'AI/ML' | 'Hardware'

export interface Project {
    title: string
    description: string
    longDescription?: string
    tags: string[]
    game?: boolean
    github: string
    demoUrl?: string
    category: ProjectCategory
    images?: string[]
    challenges?: string[]
    outcomes?: string[]
}

export const projects: Project[] = [
    {
        title: "NYC Recommendations",
        description: "React app for NYC recommendations.",
        longDescription: "A curated guide to the best spots in NYC, built with a focus on performance and local-first data. Users can filter by category and view on a map.",
        tags: ["React", "Node.js", "Supabase"],
        github: "",
        category: "Web",
        images: [],
        // challenges: [
        //     "Optimizing map rendering for hundreds of markers without lag.",
        //     "Designing a mobile-friendly interface for on-the-go usage."
        // ],
        // outcomes: [
        //     "Reduced initial load time by 40% using static generation.",
        //     "Positively received by beta testers for its simplicity."
        // ]
    },
    {
        title: "PintOS",
        description: "multi-threaded OS kernel in C, implementing priority scheduling, a synchronized write-back buffer cache, and a virtual memory subsystem with demand paging.",
        longDescription: "A comprehensive operating system kernel project implementing core OS functionalities. This project required deep understanding of low-level memory management, concurrency, and scheduling algorithms.",
        tags: ["C", "Operating System", "x86 Assembly"],
        github: "",
        category: "Hardware",
        // challenges: [
        //     "Debugging race conditions in the thread scheduler.",
        //     "Implementing a robust virtual memory system with swap space."
        // ],
        // outcomes: [
        //     "Successfully passed all rigorous test suites.",
        //     "Gained deep appreciation for the complexity of modern OS kernels."
        // ]
    },
    {
        title: "LyricNet",
        description: "Multimodal Fusion model for lyrical emotion prediction.",
        longDescription: "A research project exploring the intersection of natural language processing and music information retrieval. The model predicts the emotional valence and arousal of a song based on its lyrics and audio features.",
        tags: ["Python", "PyTorch", "BERT", "NLP"],
        github: "",
        category: "AI/ML",
        // challenges: [
        //     " aligning multimodal data sources (text and audio) for training.",
        //     "Fine-tuning BERT on a domain-specific dataset."
        // ]
    },
    {
        title: "Coup Reinforcement Learning Agent",
        description: "RL agent that learns to bluff and win at the card game Coup.",
        longDescription: "An implementation of a Q-learning agent capable of playing the social deduction game Coup. The agent learns optimal strategies for bluffing and calling bluffs through self-play.",
        tags: ["Python", "Reinforcement Learning"],
        github: "",
        category: "AI/ML",
        // challenges: [
        //     "Modeling the imperfect information state space of the game.",
        //     "Balancing exploration vs exploitation in a game with high variance."
        // ],
        // outcomes: [
        //     "Achieved >90% win rate against a random baseline.",
        //     "Demonstrated emergent bluffing behavior."
        // ]
    },
    {
        title: "Digital Audio Player (FPGA)",
        description: "Verilog‑based audio player with real‑time reverse playback and visualization on a PYNQ‑Z2 FPGA.",
        longDescription: "A hardware design project implementing a fully functional digital audio player on an FPGA. Features include playback control, volume adjustment, and real-time frequency visualization.",
        tags: ["Verilog", "FPGA", "Hardware"],
        github: "",
        category: "Hardware"
    },
    {
        title: "Rock Climbing Route Grader",
        description: "Computer vision-powered mobile utility with offline-first capabilities.",
        longDescription: "A mobile application that uses computer vision to analyze climbing holds and suggest a difficulty grade. Built for climbers who want to grade their home wall problems.",
        tags: ["Python", "PyTorch", "Computer Vision"],
        github: "",
        category: "AI/ML"
    },
    {
        title: "Slide Social (iOS App)",
        description: "iOS social platform built from scratch (80% of codebase). Designed custom image compression that cut costs by >90%. Launched to App Store.",
        longDescription: "A full-featured social networking app focusing on photo sharing. Built using Swift and UIKit/SwiftUI, with a custom backend.",
        tags: ["Swift", "iOS", "Algorithms"],
        github: "",
        category: "Mobile",
        challenges: [
            "Implementing a custom image compression algorithm to reduce bandwidth costs.",
            "Managing complex social graph relationships efficiently."
        ],
        outcomes: [
            "Launched to the App Store with 100+ active users.",
            "Reduced Firebase costs by 90% via compression optimization."
        ]
    },
    {
        title: "Stanford Pupper",
        description: "Quadruped robot assembly and gait programming.",
        longDescription: "Assembly and programming of the Stanford Pupper robot. Involved calibrating the physical build and tweaking gait algorithms for stability.",
        tags: ["Hardware", "Robotics", "Python"],
        github: "",
        category: "Hardware"
    },
    {
        title: "SmartGoggles",
        description: "IoT goggles aimed at helping visually impaired users navigate.",
        longDescription: "A wearable device equipped with distance sensors to provide haptic feedback to the wearer, alerting them of obstacles.",
        tags: ["iOS", "Swift", "SwiftUI", "Animation", "IOT", "Adafruit"],
        github: "",
        category: "Hardware"
    },
    {
        title: "Thai Elephant Website",
        description: "A lightweight, responsive site built with modern CSS—simple, fast, and clean.",
        longDescription: "A restaurant website focusing on visual appeal and performance. Uses modern CSS grid/flexbox layouts and high-quality imagery.",
        tags: ["HTML", "CSS", "Design"],
        github: "https://github.com/ethanharianto/Thai-Elephant-2-Website",
        category: "Web"
    },
    {
        title: "100 Days of SwiftUI",
        description: "A series of small iOS apps exploring SwiftUI patterns and animations.",
        longDescription: "A portfolio of daily challenges completed as part of the 100 Days of SwiftUI curriculum. improving mastery of declarative UI.",
        tags: ["Swift", "SwiftUI", "Animation"],
        github: "https://github.com/ethanharianto/100-Days-of-SwiftUI",
        category: "Mobile"
    },
    {
        title: "freeCodeCamp Projects",
        description: "A collection of curriculum projects—HTML/CSS/JS fundamentals and beyond.",
        longDescription: "Various web development projects demonstrating proficiency in core web technologies.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/ethanharianto/freeCodeCamp-Projects",
        category: "Web"
    },
]
