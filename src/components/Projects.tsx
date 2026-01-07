import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderGit2 } from 'lucide-react'

import { projects } from '../data/projects'
import type { ProjectCategory } from '../data/projects'

const categories: (ProjectCategory | 'All')[] = ['All', 'Web', 'Mobile', 'AI/ML', 'Hardware']

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All')

  const filteredProjects = projects.filter(project =>
    activeCategory === 'All' ? true : project.category === activeCategory
  )

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
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-xl font-semibold">Projects</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${activeCategory === cat
                  ? 'bg-neutral-100 text-neutral-900 scale-105'
                  : 'bg-neutral-800/50 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                variants={item}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-dark rounded-xl overflow-hidden hover:bg-neutral-900/50 transition-colors group flex flex-col"
              >
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
                    {/* Category Badge */}
                    <span className="text-[10px] px-1.5 py-0.5 rounded border border-blue-500/20 text-blue-400 bg-blue-500/5 uppercase tracking-wider">
                      {project.category}
                    </span>
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
          </AnimatePresence>
        </motion.div>
      </div >
    </section >
  )
}

export default Projects
