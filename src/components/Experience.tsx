const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Junior Software Developer",
      company: "Pantheon Lab",
      location: "Remote",
      period: "June 2025 – Aug 2025",
      description: "Shipped core pieces of a conversational assistant and developer platform.",
      achievements: [
        "Built STT→LLM→TTS→Lip‑Sync pipeline on WebRTC; deployed across multiple regions",
        "Implemented secure Go backend with rate‑limiting and quotas; ensured high availability",
        "Launched Next.js self‑service developer portal for API key registration (hours → minutes)"
      ],
      technologies: ["Go", "Next.js", "WebRTC", "TTS/STT", "LLM"],
      logo: "⚙️"
    },
    {
      id: 2,
      title: "Engineering Lead (Website Project for IYNA)",
      company: "Develop for Good",
      location: "Remote",
      period: "May 2025 – July 2025",
      description: "Led a no‑cost WordPress workflow and shipped chapter tooling for 50+ global chapters.",
      achievements: [
        "Devised no‑cost development/collaboration workflow; eliminated server fees",
        "Built member dashboards and chapter management; reduced admin time ~8 hrs/week"
      ],
      technologies: ["WordPress", "JavaScript", "Workflow Automation"],
      logo: "🌐"
    },
    {
      id: 3,
      title: "Research Assistant",
      company: "Stanford PinCS Lab",
      location: "Stanford, CA",
      period: "Mar 2025 – June 2025",
      description: "Built an accessibility‑first iOS transcription app powered by AssemblyAI.",
      achievements: [
        "Swift app for memory recall pilot (early‑stage Alzheimer's)",
        "Implemented high‑contrast modes, scalable fonts, single‑tap navigation"
      ],
      technologies: ["Swift", "SwiftUI", "AssemblyAI"],
      logo: "🔬"
    },
    {
      id: 4,
      title: "Lead Engineer / Co‑Founder",
      company: "Slide Social",
      location: "Remote",
      period: "Dec 2022 – Sep 2023",
      description: "Led engineering for a Swift‑based social app from Figma to App Store.",
      achievements: [
        "Built ~80% of codebase; launched to App Store",
        "Designed image compression algorithm cutting storage cost >90%"
      ],
      technologies: ["Swift", "iOS", "Image Processing"],
      logo: "📱"
    }
  ]

  return (
    <section id="experience" className="py-12 border-b border-neutral-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="text-[15px]">
              <h3 className="font-semibold">
                {exp.title}, {exp.company}
              </h3>
              <div className="text-xs text-neutral-400">
                {exp.period} — {exp.location}
              </div>
              <p className="mt-2">{exp.description}</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                {exp.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
              <div className="text-xs text-neutral-400 mt-2">
                Tech: {exp.technologies.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
