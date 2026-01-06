import { Mail, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      value: "eharianto@stanford.edu",
      href: "mailto:eharianto@stanford.edu",
      icon: <Mail size={24} className="text-blue-400" />
    },
    {
      name: "GitHub",
      value: "github.com/ethanharianto",
      href: "https://github.com/ethanharianto",
      icon: <Github size={24} className="text-white" />
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/ethan-harianto",
      href: "https://linkedin.com/in/ethan-harianto",
      icon: <Linkedin size={24} className="text-blue-600" />
    },
    {
      name: "Resume",
      value: "View PDF",
      href: "/Ethan_Harianto_Resume.pdf",
      icon: <FileText size={24} className="text-red-400" />
    }
  ]

  return (
    <section id="contact" className="py-12 pb-24 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === 'Email' ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="glass-dark p-6 rounded-xl border border-white/5 hover:border-white/10 hover:bg-neutral-800/50 transition-all group flex items-start justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <div className="text-sm text-neutral-400 mb-0.5">{link.name}</div>
                  <div className="font-medium text-neutral-200 group-hover:text-white transition-colors">{link.value}</div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-neutral-500">
          <p>Based in the San Francisco Bay Area.</p>
          <p className="mt-2">© {new Date().getFullYear()} Ethan Harianto. Built with React, Tailwind, and Framer Motion.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
