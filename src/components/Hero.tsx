const Hero = () => {
  return (
    <section id="hero" className="py-12 border-b border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 space-y-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">Ethan Harianto</h1>
        <p className="text-sm text-neutral-400">MS CS & BS EE — Stanford ’26</p>
        <p className="text-[15px]">
          I build end‑to‑end systems: conversational AI pipelines, distributed APIs, and FPGA‑based
          digital systems. I care about clarity, reliability, and shipping useful things.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#projects" className="underline">Projects</a>
          <a href="/Ethan_Harianto_Resume.pdf" target="_blank" rel="noopener noreferrer" className="underline">
            Resume (PDF)
          </a>
          <a href="mailto:eharianto@stanford.edu" className="underline">Email</a>
          <a href="https://github.com/ethanharianto" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
          <a href="https://linkedin.com/in/ethan-harianto" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
