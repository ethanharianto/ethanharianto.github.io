import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
            <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/ethanharianto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors p-2"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/ethan-harianto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors p-2"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:eharianto@stanford.edu"
                        className="hover:text-white transition-colors p-2"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>

                <div className="flex flex-col gap-1">
                    <p>© {currentYear} Ethan Harianto. All rights reserved.</p>
                    <p className="text-xs text-neutral-600">
                        Built with React, Tailwind CSS, and Framer Motion.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
