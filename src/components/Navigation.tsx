import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, Command } from 'lucide-react'

interface NavigationProps {
  onOpenCmdk: () => void
}

const Navigation = ({ onOpenCmdk }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 glass-dark">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="font-semibold text-lg hover:text-blue-400 transition-colors">
          Ethan Harianto
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={onOpenCmdk}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-800/50 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors border border-white/5 ml-2 group"
          >
            <Search size={14} className="group-hover:text-blue-400 transition-colors" />
            <span className="text-xs font-mono flex items-center gap-1">
              {isMac ? <Command size={10} /> : <span className="text-[10px]">CTRL</span>} K
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={onOpenCmdk}
            className="text-neutral-300 hover:text-white"
          >
            <Search size={20} />
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 text-neutral-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-neutral-900/95 backdrop-blur-md"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-300 hover:text-white transition-colors py-2 block"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
