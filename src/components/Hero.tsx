import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="py-12 border-b border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 space-y-4"
      >
        <h1 className="text-2xl sm:text-3xl font-semibold">Ethan Harianto</h1>
        <p className="text-sm text-neutral-400">Software Engineer — Stanford MS CS & BS CS ’26</p>
        <p className="text-[15px] max-w-2xl">
          I build reliable ML systems end-to-end: data, training, evaluation, and production serving.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#projects" className="underline hover:text-white transition-colors">Projects</a>
          <a href="/Ethan_Harianto_Resume.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
            Resume (PDF)
          </a>
          <a href="mailto:eharianto@stanford.edu" className="underline hover:text-white transition-colors">Email</a>
          <a href="https://github.com/ethanharianto" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/ethan-harianto" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">LinkedIn</a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
