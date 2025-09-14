import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Globe, FileDown } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Portfolio contact from ${formData.name}`
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    const mailto = `mailto:eharianto@stanford.edu?subject=${encodeURIComponent(subject)}&body=${body}`
    window.location.href = mailto
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "eharianto@stanford.edu",
      href: "mailto:eharianto@stanford.edu"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "(347) 475-7671",
      href: "tel:+13474757671"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Bay Area, CA",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/ethanharianto",
      color: "hover:text-gray-800"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ethan-harianto",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://twitter.com/ethanharianto",
      color: "hover:text-blue-400"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      href: "https://ethanharianto.github.io/",
      color: "hover:text-stanford-red"
    },
    {
      icon: <FileDown className="w-6 h-6" />,
      label: "Resume",
      href: "/Ethan_Harianto_Resume.pdf",
      color: "hover:text-gray-800"
    }
  ]

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something
            <br />
            <span className="text-stanford-red">Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss exciting opportunities. 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="glass rounded-2xl border border-gray-200/50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-stanford-red focus:ring-2 focus:ring-stanford-red/20 outline-none transition-all duration-300 bg-white/50"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-stanford-red focus:ring-2 focus:ring-stanford-red/20 outline-none transition-all duration-300 bg-white/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-stanford-red focus:ring-2 focus:ring-stanford-red/20 outline-none transition-all duration-300 bg-white/50 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full apple-button px-6 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="glass rounded-2xl border border-gray-200/50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + 0.1 * index, duration: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 bg-stanford-red/10 text-stanford-red rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">{item.label}</div>
                      {item.href ? (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={item.href}
                          className="text-lg font-semibold text-gray-900 hover:text-stanford-red transition-colors duration-200"
                        >
                          {item.value}
                        </motion.a>
                      ) : (
                        <div className="text-lg font-semibold text-gray-900">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl border border-gray-200/50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect Online</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + 0.1 * index, duration: 0.5 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-gray-100 rounded-xl text-gray-600 ${social.color} transition-all duration-300 hover:shadow-lg`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              <p className="mt-6 text-gray-600 text-sm">
                Follow my journey in engineering and technology. Always excited to connect with fellow innovators and creators!
              </p>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="glass rounded-2xl border border-gray-200/50 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-900">Available for Opportunities</span>
              </div>
              <p className="text-sm text-gray-600">
                Currently open to full-time positions starting Summer 2025. Particularly interested in roles that combine hardware and software engineering.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
