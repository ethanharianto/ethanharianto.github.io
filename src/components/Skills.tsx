const Skills = () => {
  const skillCategories = [
    {
      title: "Hardware & EE",
      skills: [
        { name: "Verilog", level: 90 },
        { name: "FPGA Programming", level: 88 },
        { name: "Digital Logic Design", level: 86 },
        { name: "Embedded Systems", level: 84 },
        { name: "Signal Processing", level: 80 },
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "Go", level: 88 },
        { name: "Swift", level: 90 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "C/C++", level: 85 },
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "PyTorch", level: 88 },
        { name: "scikit-learn", level: 85 },
        { name: "Pandas / NumPy", level: 90 },
        { name: "Computer Vision (YOLOv5)", level: 82 },
        { name: "RL (Q-learning)", level: 78 },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "Next.js / React", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "Firebase", level: 82 },
        { name: "REST / GraphQL APIs", level: 86 },
        { name: "SwiftUI (iOS)", level: 80 },
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: 82 },
        { name: "OpenAI / AssemblyAI / Azure STT", level: 88 },
        { name: "Ollama / LLM Tooling", level: 80 },
        { name: "CI/CD Basics", level: 78 },
        { name: "WebRTC (media pipelines)", level: 74 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "Figma", level: 88 },
        { name: "Vivado / Quartus", level: 85 },
        { name: "NodeJS Tooling", level: 86 },
        { name: "MATLAB / Simulink", level: 78 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-12 border-b border-neutral-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="space-y-4">
          {skillCategories.map((category) => (
            <div key={category.title} className="text-[15px]">
              <div className="font-semibold">{category.title}</div>
              <div className="text-sm text-neutral-400">
                {category.skills.map(s => s.name).join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
