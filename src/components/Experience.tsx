import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Junior Software Developer",
      company: "Pantheon Lab",
      location: "Hong Kong SAR",
      period: "June 2025 – Aug 2025",
      description: "Shipped core pieces of a conversational assistant and developer platform.",
      achievements: [
        "Built STT→LLM→TTS→Lip‑Sync pipeline on WebRTC; deployed across multiple regions",
        "Implemented secure Go backend with rate‑limiting and quotas; ensured high availability",
        "Launched Next.js self‑service developer portal for API key registration (hours → minutes)"
      ],
      technologies: ["Go", "Next.js", "WebRTC", "System Architecture"],
    },
    {
      id: 2,
      title: "Engineering Lead",
      company: "Develop for Good",
      location: "Remote",
      period: "May 2025 – July 2025",
      description: "Led a no‑cost WordPress workflow and shipped chapter tooling for 50+ global chapters.",
      achievements: [
        "Devised no‑cost development/collaboration workflow; eliminated server fees",
        "Built member dashboards and chapter management; reduced admin time ~8 hrs/week"
      ],
      technologies: ["WordPress", "JavaScript", "Workflow Automation"],
    },
    {
      id: 3,
      title: "Research Assistant",
      company: "Stanford PinCS Lab",
      location: "Stanford, CA",
      period: "Mar 2025 – June 2025",
      description: "Built an accessibility‑first iOS transcription app powered by AssemblyAI.",
      achievements: [
        "Prototyped memory recall aid for early‑stage Alzheimer's patients",
        "Implemented high‑contrast modes, scalable fonts, and intuitive single‑tap navigation"
      ],
      technologies: ["Swift", "SwiftUI", "Mobile UX"],
    }
  ]

  return (
    <section id="experience" className="py-12 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
          <Briefcase size={24} className="text-blue-400" />
          Experience
        </h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex group is-active pl-12">

              <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-[#0b0b0f] shadow shrink-0 z-10">
                <div className="w-3 h-3 bg-blue-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="w-full glass-dark p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div className="font-semibold text-lg">{exp.company}</div>
                  <div className="text-xs text-neutral-400 font-mono flex items-center gap-1">
                    <Calendar size={12} /> {exp.period}
                  </div>
                </div>
                <div className="text-sm text-blue-400 mb-2 font-medium flex items-center gap-1">
                  {exp.title} <span className="text-neutral-500">•</span> <span className="text-neutral-500 flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                </div>
                <p className="text-sm text-neutral-300 mb-4">
                  {exp.description}
                </p>
                <ul className="list-disc ml-4 space-y-1 mb-4 text-sm text-neutral-400">
                  {exp.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-neutral-800/50 text-neutral-400 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
