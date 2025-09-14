import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Cpu, Code, Zap, Globe } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Hardware', 'Software', 'Full-Stack', 'AI/ML']

  const projects = [
    {
      id: 1,
      title: "Task Manager (Expo/React Native)",
      description: "A fast, offline‑friendly task manager built with Expo and TypeScript.",
      category: "Mobile",
      technologies: ["TypeScript", "Expo", "React Native"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/ethanharianto/task-manager-expo",
      featured: true,
    },
    {
      id: 2,
      title: "Thai Elephant Website",
      description: "A lightweight, responsive site built with modern CSS—simple, fast, and clean.",
      category: "Frontend",
      technologies: ["HTML", "CSS"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/ethanharianto/Thai-Elephant-2-Website",
    },
    {
      id: 3,
      title: "100 Days of SwiftUI",
      description: "A series of small iOS apps exploring SwiftUI patterns and animations.",
      category: "iOS",
      technologies: ["Swift", "SwiftUI"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/ethanharianto/100-Days-of-SwiftUI",
    },
    {
      id: 4,
      title: "Slyther (Python Snake Game)",
      description: "A tight Python implementation of Snake with smooth input and grid logic.",
      category: "Software",
      technologies: ["Python"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/ethanharianto/Slyther",
    },
    {
      id: 5,
      title: "freeCodeCamp Projects",
      description: "A collection of curriculum projects—HTML/CSS/JS fundamentals and beyond.",
      category: "Full-Stack",
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/ethanharianto/freeCodeCamp-Projects",
    },
    {
      id: 6,
      title: "Layered Landscapes",
      description: "A playful HTML/CSS visual—layers, parallax, and subtle motion.",
      category: "Frontend",
      technologies: ["HTML", "CSS"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/ethanharianto/Layered-Landscapes",
    },
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Hardware': return <Cpu className="w-5 h-5" />
      case 'Software': return <Code className="w-5 h-5" />
      case 'Full-Stack': return <Globe className="w-5 h-5" />
      case 'AI/ML': return <Zap className="w-5 h-5" />
      default: return <Code className="w-5 h-5" />
    }
  }

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32 bg-apple-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-stanford-red">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative projects spanning hardware design, software engineering, 
            and interdisciplinary solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-start gap-3 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-stanford-red text-white shadow-lg'
                  : 'glass border border-gray-200/50 text-gray-700 hover:border-stanford-red/30'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index + 0.4, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`glass rounded-2xl border border-gray-200/50 overflow-hidden group cursor-pointer ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-stanford-red/10 to-apple-blue/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full bg-gray-200 flex items-center justify-center"
                >
                  <span className="text-gray-400 text-sm">Project Preview</span>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-stanford-red">
                    {getCategoryIcon(project.category)}
                  </div>
                  <span className="text-xs font-semibold text-stanford-red uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-stanford-red transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-stanford-red transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
