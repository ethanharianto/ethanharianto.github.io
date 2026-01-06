import { Terminal, Smartphone, Database, Code2 } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={20} className="text-blue-400" />,
      skills: [
        { name: "Python" },
        { name: "Go" },
        { name: "TypeScript" },
        { name: "Swift" },
        { name: "SQL" }
      ]
    },
    {
      title: "Backend & Systems",
      icon: <Terminal size={20} className="text-green-400" />,
      skills: [
        { name: "Distributed Systems" },
        { name: "API Design (REST/gRPC)" },
        { name: "Docker/Containers" },
        { name: "Caching (Redis)" },
        { name: "Realtime (WebRTC)" }
      ]
    },
    {
      title: "Frontend & Mobile",
      icon: <Smartphone size={20} className="text-purple-400" />,
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "React Native" },
        { name: "SwiftUI" },
        { name: "Tailwind CSS" }
      ]
    },
    {
      title: "Data & AI",
      icon: <Database size={20} className="text-orange-400" />,
      skills: [
        { name: "Data Pipelines" },
        { name: "PyTorch" },
        { name: "LLM Integration" },
        { name: "Computer Vision" },
        { name: "NumPy/Pandas" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-12 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-6">Technical Arsenal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-dark p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <div className="font-semibold">{category.title}</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(s => (
                  <span key={s.name} className="text-sm text-neutral-400 bg-white/5 px-2 py-1 rounded">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
