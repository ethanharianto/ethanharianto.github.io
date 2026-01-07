import { motion } from 'framer-motion'
import { X, Github, ExternalLink, Activity, Target } from 'lucide-react'
import type { Project } from '../data/projects'
import { useEffect } from 'react'

interface ProjectModalProps {
    project: Project
    onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Modal Content */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                layoutId={`project-${project.title}`}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl glass-dark custom-scrollbar"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-neutral-400 hover:text-white transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                        <div className="flex flex-wrap gap-2 text-sm text-neutral-400 mb-4">
                            <span className="text-blue-400 font-medium px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                                {project.category}
                            </span>
                            {project.tags.map(tag => (
                                <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-neutral-300 leading-relaxed text-lg">
                            {project.longDescription || project.description}
                        </p>
                    </div>

                    {/* Key Links */}
                    <div className="flex gap-4 mb-8">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors text-sm font-medium"
                            >
                                <Github size={18} />
                                View Code
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors text-sm font-medium shadow-lg shadow-blue-500/20"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Challenges */}
                        {project.challenges && project.challenges.length > 0 && (
                            <div>
                                <h3 className="flex items-center gap-2 font-semibold mb-3 text-neutral-200">
                                    <Activity size={18} className="text-orange-400" />
                                    Key Challenges
                                </h3>
                                <ul className="space-y-2">
                                    {project.challenges.map((challenge, i) => (
                                        <li key={i} className="text-sm text-neutral-400 list-disc ml-4 pl-1">
                                            {challenge}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Outcomes */}
                        {project.outcomes && project.outcomes.length > 0 && (
                            <div>
                                <h3 className="flex items-center gap-2 font-semibold mb-3 text-neutral-200">
                                    <Target size={18} className="text-green-400" />
                                    Outcomes
                                </h3>
                                <ul className="space-y-2">
                                    {project.outcomes.map((outcome, i) => (
                                        <li key={i} className="text-sm text-neutral-400 list-disc ml-4 pl-1">
                                            {outcome}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ProjectModal
