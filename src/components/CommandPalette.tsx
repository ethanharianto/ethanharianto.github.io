import { useEffect } from 'react'
import { Command } from 'cmdk'
import { Search, Globe, FolderGit2, Mail, FileText, Layout, Github, Linkedin } from 'lucide-react'

interface CommandPaletteProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const CommandPalette = ({ open, setOpen }: CommandPaletteProps) => {
  // Toggle with Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(!open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open, setOpen])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden z-50 p-2 glass-dark backdrop-blur-xl"
    >
      <div className="flex items-center border-b border-white/10 px-3" cmdk-input-wrapper="">
        <Search className="w-5 h-5 text-neutral-500 mr-2" />
        <Command.Input
          placeholder="Type a command or search..."
          className="flex-1 bg-transparent border-none outline-none py-4 text-sm text-white placeholder-neutral-500 font-mono"
        />
      </div>

      <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden py-2 px-1 scroll-py-2 custom-scrollbar">
        <Command.Empty className="py-6 text-center text-sm text-neutral-500">
          No results found.
        </Command.Empty>

        <Command.Group heading="Navigation" className="text-xs text-neutral-500 font-medium mb-1 px-2 uppercase tracking-wider">
          <Command.Item
            onSelect={() => runCommand(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }))}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-white/5 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/5 aria-selected:text-white"
          >
            <Globe className="w-4 h-4 text-neutral-400" />
            <span>Go to About</span>
          </Command.Item>
          <Command.Item
            onSelect={() => runCommand(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }))}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-white/5 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/5 aria-selected:text-white"
          >
            <FolderGit2 className="w-4 h-4 text-neutral-400" />
            <span>Go to Projects</span>
          </Command.Item>
          <Command.Item
            onSelect={() => runCommand(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }))}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-white/5 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/5 aria-selected:text-white"
          >
            <BriefcaseIcon className="w-4 h-4 text-neutral-400" />
            <span>Go to Experience</span>
          </Command.Item>
          <Command.Item
            onSelect={() => runCommand(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }))}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-white/5 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/5 aria-selected:text-white"
          >
            <Layout className="w-4 h-4 text-neutral-400" />
            <span>Go to Skills</span>
          </Command.Item>
          <Command.Item
            onSelect={() => runCommand(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }))}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-white/5 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/5 aria-selected:text-white"
          >
            <Mail className="w-4 h-4 text-neutral-400" />
            <span>Go to Contact</span>
          </Command.Item>
        </Command.Group>

        <Command.Separator className="h-px bg-white/5 my-2" />

        <Command.Group heading="Socials" className="text-xs text-neutral-500 font-medium mb-1 px-2 uppercase tracking-wider">
          <Command.Item
            onSelect={() => runCommand(() => window.open('https://github.com/ethanharianto', '_blank'))}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-white/5 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/5 aria-selected:text-white"
          >
            <Github className="w-4 h-4 text-neutral-400" />
            <span>GitHub</span>
          </Command.Item>
          <Command.Item
            onSelect={() => runCommand(() => window.open('https://linkedin.com/in/ethan-harianto', '_blank'))}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-white/5 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/5 aria-selected:text-white"
          >
            <Linkedin className="w-4 h-4 text-neutral-400" />
            <span>LinkedIn</span>
          </Command.Item>
          <Command.Item
            onSelect={() => runCommand(() => window.open('/Ethan_Harianto_Resume.pdf', '_blank'))}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-white/5 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/5 aria-selected:text-white"
          >
            <FileText className="w-4 h-4 text-neutral-400" />
            <span>Resume (PDF)</span>
          </Command.Item>
          <Command.Item
            onSelect={() => runCommand(() => window.location.href = 'mailto:eharianto@stanford.edu')}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-neutral-300 hover:bg-white/5 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/5 aria-selected:text-white"
          >
            <Mail className="w-4 h-4 text-neutral-400" />
            <span>Send Email</span>
          </Command.Item>
        </Command.Group>
      </Command.List>

      <div className="border-t border-white/10 px-3 py-2 flex items-center justify-between text-[10px] text-neutral-500">
        <div className="flex items-center gap-2">
          <span>Navigate</span>
          <div className="flex gap-1">
            <kbd className="bg-white/10 px-1 rounded">↑</kbd>
            <kbd className="bg-white/10 px-1 rounded">↓</kbd>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>Select</span>
          <kbd className="bg-white/10 px-1 rounded">Enter</kbd>
        </div>
      </div>
    </Command.Dialog>
  )
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

export default CommandPalette
