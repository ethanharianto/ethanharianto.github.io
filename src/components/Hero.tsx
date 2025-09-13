import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-apple-gray"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-stanford-red/10 to-apple-blue/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-apple-blue/10 to-stanford-red/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg lg:text-xl text-gray-600 font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name with text reveal animation */}
          <div className="text-reveal">
            <motion.h1
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-stanford-red via-stanford-darkred to-apple-blue bg-clip-text text-transparent">
                Ethan Harianto
              </span>
            </motion.h1>
          </div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl lg:text-4xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Electrical Engineering & Computer Science
            <br />
            <span className="text-stanford-red font-medium">Stanford University '25</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Bridging the gap between hardware and software to create
            innovative solutions that shape the future of technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(140, 21, 21, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="apple-button px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(140, 21, 21, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="px-8 py-4 rounded-full border-2 border-stanford-red text-stanford-red font-semibold text-lg flex items-center gap-2 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-stanford-red transition-colors duration-300"
        >
          <span className="text-sm font-medium tracking-wide uppercase">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
