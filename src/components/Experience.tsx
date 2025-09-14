import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      id: 1,
      title: "Junior Software Developer",
      company: "Pantheon Lab",
      location: "Remote",
      period: "June 2025 – Aug 2025",
      description: "Shipped core pieces of a conversational assistant and developer platform.",
      achievements: [
        "Built STT→LLM→TTS→Lip‑Sync pipeline on WebRTC; deployed across multiple regions",
        "Implemented secure Go backend with rate‑limiting and quotas; ensured high availability",
        "Launched Next.js self‑service developer portal for API key registration (hours → minutes)"
      ],
      technologies: ["Go", "Next.js", "WebRTC", "TTS/STT", "LLM"],
      logo: "⚙️"
    },
    {
      id: 2,
      title: "Engineering Lead (Website Project for IYNA)",
      company: "Develop for Good",
      location: "Remote",
      period: "May 2025 – July 2025",
      description: "Led a no‑cost WordPress workflow and shipped chapter tooling for 50+ global chapters.",
      achievements: [
        "Devised no‑cost development/collaboration workflow; eliminated server fees",
        "Built member dashboards and chapter management; reduced admin time ~8 hrs/week"
      ],
      technologies: ["WordPress", "JavaScript", "Workflow Automation"],
      logo: "🌐"
    },
    {
      id: 3,
      title: "Research Assistant",
      company: "Stanford PinCS Lab",
      location: "Stanford, CA",
      period: "Mar 2025 – June 2025",
      description: "Built an accessibility‑first iOS transcription app powered by AssemblyAI.",
      achievements: [
        "Swift app for memory recall pilot (early‑stage Alzheimer's)",
        "Implemented high‑contrast modes, scalable fonts, single‑tap navigation"
      ],
      technologies: ["Swift", "SwiftUI", "AssemblyAI"],
      logo: "🔬"
    },
    {
      id: 4,
      title: "Lead Engineer / Co‑Founder",
      company: "Slide Social",
      location: "Remote",
      period: "Dec 2022 – Sep 2023",
      description: "Led engineering for a Swift‑based social app from Figma to App Store.",
      achievements: [
        "Built ~80% of codebase; launched to App Store",
        "Designed image compression algorithm cutting storage cost >90%"
      ],
      technologies: ["Swift", "iOS", "Image Processing"],
      logo: "📱"
    }
  ]

  return (
    <section id="experience" ref={ref} className="py-20 lg:py-32 bg-apple-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-stanford-red">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building expertise through internships at leading tech companies and impactful research experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-stanford-red via-apple-blue to-stanford-red"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-stanford-red rounded-full flex items-center justify-center z-10">
                  <span className="text-lg">{exp.logo}</span>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8 md:text-left'
                } md:w-1/2`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-2xl border border-gray-200/50 p-6 hover:border-stanford-red/30 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-stanford-red font-semibold mb-2">
                        <span>{exp.company}</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-stanford-red mt-1.5 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl border border-gray-200/50 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for New Opportunities
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Currently seeking full-time opportunities to apply my interdisciplinary expertise 
              in building the next generation of technology solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="apple-button px-8 py-4 rounded-full text-white font-semibold"
            >
              View Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
