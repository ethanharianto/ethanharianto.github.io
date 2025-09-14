import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cpu, Code, Zap, Globe } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const highlights = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Electrical Engineering",
      description: "Digital systems, signal processing, and embedded hardware design"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Computer Science",
      description: "Software engineering, algorithms, and system architecture"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Bridging hardware and software for next-gen solutions"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Impact",
      description: "Building technology that makes a difference"
    }
  ]

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(140,21,21,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
              >
                Where Hardware
                <br />
                <span className="bg-gradient-to-r from-stanford-red to-apple-blue bg-clip-text text-transparent">
                  Meets Software
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg lg:text-xl text-gray-600 leading-relaxed"
              >
                I'm Ethan — an engineer who loves turning ideas into things people actually use.
                I'm studying MS CS and BS EE at Stanford (’26, GPA 3.78). Lately I've built a
                conversational assistant at Pantheon Lab, an accessibility‑first iOS app at
                Stanford’s PinCS Lab, and a social app called Slide Social.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                What I care about: clear, dependable systems and interfaces that feel effortless.
                I like to roam the stack—Go services and WebRTC on the backend, React/Next.js on
                the front, and Verilog/FPGA when the problem wants hardware. Right now I’m
                exploring how to make AI features feel fast, private, and human.
              </motion.p>
            </div>

            {/* Stanford Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl border border-gray-200/50 shadow-xl bg-white/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-stanford-red via-red-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Stanford University</h3>
                  <p className="text-stanford-red font-semibold">Expected June 2026</p>
                  <p className="text-sm text-gray-600">MS Computer Science & BS Electrical Engineering</p>
                  <p className="text-sm text-gray-500">GPA: 3.78/4.0</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index + 0.3, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="glass p-6 rounded-2xl border border-gray-200/50 hover:border-stanford-red/30 transition-all duration-300 group cursor-pointer shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-2xl"
              >
                <div className="text-stanford-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
