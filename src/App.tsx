import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CommandPalette from './components/CommandPalette'
import Footer from './components/Footer'

function App() {
  const [isCmdkOpen, setIsCmdkOpen] = useState(false)

  return (
    <div>
      <CommandPalette open={isCmdkOpen} setOpen={setIsCmdkOpen} />
      <Navigation onOpenCmdk={() => setIsCmdkOpen(true)} />
      <main id="main" tabIndex={-1} className="outline-none scroll-mt-28">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
