import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cpu, Code, Database, Cloud, Wrench, Zap } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      title: "Hardware & EE",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-stanford-red to-stanford-darkred",
      skills: [
        { name: "Verilog", level: 90 },
        { name: "FPGA Programming", level: 88 },
        { name: "Digital Logic Design", level: 86 },
        { name: "Embedded Systems", level: 84 },
        { name: "Signal Processing", level: 80 },
      ]
    },
    {
      title: "Programming",
      icon: <Code className="w-8 h-8" />,
      color: "from-apple-blue to-blue-600",
      skills: [
        { name: "Python", level: 95 },
        { name: "Go", level: 88 },
        { name: "Swift", level: 90 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "C/C++", level: 85 },
      ]
    },
    {
      title: "Machine Learning",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-purple-700",
      skills: [
        { name: "PyTorch", level: 88 },
        { name: "scikit-learn", level: 85 },
        { name: "Pandas / NumPy", level: 90 },
        { name: "Computer Vision (YOLOv5)", level: 82 },
        { name: "RL (Q-learning)", level: 78 },
      ]
    },
    {
      title: "Web Development",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-green-700",
      skills: [
        { name: "Next.js / React", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "Firebase", level: 82 },
        { name: "REST / GraphQL APIs", level: 86 },
        { name: "SwiftUI (iOS)", level: 80 },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Docker", level: 82 },
        { name: "OpenAI / AssemblyAI / Azure STT", level: 88 },
        { name: "Ollama / LLM Tooling", level: 80 },
        { name: "CI/CD Basics", level: 78 },
        { name: "WebRTC (media pipelines)", level: 74 },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-8 h-8" />,
      color: "from-gray-600 to-gray-800",
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "Figma", level: 88 },
        { name: "Vivado / Quartus", level: 85 },
        { name: "NodeJS Tooling", level: 86 },
        { name: "MATLAB / Simulink", level: 78 },
      ]
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="text-stanford-red">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning electrical engineering, computer science, 
            and emerging technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * categoryIndex, duration: 0.6 }}
              className="glass rounded-2xl border border-gray-200/50 p-6 hover:border-stanford-red/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      delay: 0.1 * categoryIndex + 0.05 * skillIndex + 0.2, 
                      duration: 0.5 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: 0.1 * categoryIndex + 0.05 * skillIndex + 0.4,
                          duration: 1.2,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl border border-gray-200/50 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interdisciplinary Approach
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              My unique background in both Electrical Engineering and Computer Science 
              enables me to bridge hardware and software domains, creating comprehensive 
              solutions that optimize performance across the entire technology stack.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { label: "Projects Completed", value: "50+" },
                { label: "Technologies Mastered", value: "25+" },
                { label: "Years of Experience", value: "4+" },
                { label: "Lines of Code", value: "100k+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + 0.1 * index, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-stanford-red mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
