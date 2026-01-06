import { motion } from 'framer-motion'
import { FolderGit2 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 'p-0',
      title: "Slide Social (iOS App)",
      description: "iOS social platform built from scratch (80% of codebase). Designed custom image compression that cut costs by >90%. Launched to App Store.",
      tags: ["Swift", "iOS", "Algorithms"],
      github: "",
      // image: "/slide_social_preview.png"
    },
    {
      id: 'p-1',
      title: "Rock Climbing Route Grader",
      description: "Computer vision-powered mobile utility with offline-first capabilities.",
      tags: ["Python", "PyTorch", "Computer Vision"],
      github: "",
      // image: "/route_grader_preview.png"
    },
    {
      id: 'o-1',
      title: "Task Manager (Expo/React Native)",
      description: "A fast, offline‑friendly task manager built with Expo and TypeScript.",
      tags: ["TypeScript", "React Native", "Expo"],
      github: "https://github.com/ethanharianto/task-manager-expo"
    },
    {
      id: 'o-2',
      title: "Thai Elephant Website",
      description: "A lightweight, responsive site built with modern CSS—simple, fast, and clean.",
      tags: ["HTML", "CSS", "Design"],
      github: "https://github.com/ethanharianto/Thai-Elephant-2-Website"
    },
    {
      id: 'o-3',
      title: "100 Days of SwiftUI",
      description: "A series of small iOS apps exploring SwiftUI patterns and animations.",
      tags: ["Swift", "SwiftUI", "Animation"],
      github: "https://github.com/ethanharianto/100-Days-of-SwiftUI"
    },
    {
      id: 'o-4',
      title: "Slyther (Python Snake Game)",
      description: "A tight Python implementation of Snake with smooth input and grid logic.",
      tags: ["Python", "PyGame"],
      github: "https://github.com/ethanharianto/Slyther"
    },
    {
      id: 'o-5',
      title: "freeCodeCamp Projects",
      description: "A collection of curriculum projects—HTML/CSS/JS fundamentals and beyond.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ethanharianto/freeCodeCamp-Projects"
    },
    {
      id: 'o-6',
      title: "Layered Landscapes",
      description: "A playful HTML/CSS visual—layers, parallax, and subtle motion.",
      tags: ["CSS", "Parallax", "Design"],
      github: "https://github.com/ethanharianto/Layered-Landscapes"
    },
    {
      id: 'o-7',
      title: "Digital Audio Player (FPGA)",
      description: "Verilog‑based audio player with real‑time reverse playback and visualization on a PYNQ‑Z2 FPGA.",
      tags: ["Verilog", "FPGA", "Hardware"],
      github: ""
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-12 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-6">Projects</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="glass-dark rounded-xl overflow-hidden hover:bg-neutral-900/50 transition-colors group flex flex-col"
            >
              {/* Project Image */}
              {project.image && (
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10 opacity-60" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-[15px] group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-white transition-colors"
                    >
                      <FolderGit2 size={18} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 text-neutral-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div >
    </section >
  )
}

export default Projects
