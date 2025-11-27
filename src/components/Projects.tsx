const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Task Manager (Expo/React Native)",
      description: "A fast, offline‑friendly task manager built with Expo and TypeScript.",
      github: "https://github.com/ethanharianto/task-manager-expo"
    },
    {
      id: 2,
      title: "Thai Elephant Website",
      description: "A lightweight, responsive site built with modern CSS—simple, fast, and clean.",
      github: "https://github.com/ethanharianto/Thai-Elephant-2-Website"
    },
    {
      id: 3,
      title: "100 Days of SwiftUI",
      description: "A series of small iOS apps exploring SwiftUI patterns and animations.",
      github: "https://github.com/ethanharianto/100-Days-of-SwiftUI"
    },
    {
      id: 4,
      title: "Slyther (Python Snake Game)",
      description: "A tight Python implementation of Snake with smooth input and grid logic.",
      github: "https://github.com/ethanharianto/Slyther"
    },
    {
      id: 5,
      title: "freeCodeCamp Projects",
      description: "A collection of curriculum projects—HTML/CSS/JS fundamentals and beyond.",
      github: "https://github.com/ethanharianto/freeCodeCamp-Projects"
    },
    {
      id: 6,
      title: "Layered Landscapes",
      description: "A playful HTML/CSS visual—layers, parallax, and subtle motion.",
      github: "https://github.com/ethanharianto/Layered-Landscapes"
    },
    {
      id: 7,
      title: "Digital Audio Player (FPGA)",
      description: "Verilog‑based audio player with real‑time reverse playback and waveform visualization on a PYNQ‑Z2 FPGA.",
      github: ""
    },
    {
      id: 8,
      title: "Reinforcement Learning Game Agent",
      description: "Q‑learning agent for Coup achieving >90% win rate against random‑action opponents.",
      github: ""
    },
    {
      id: 9,
      title: "Rock Climbing Route Grader",
      description: "Self‑supervised pipeline using PyTorch and YOLOv5 to grade indoor routes with ~80% accuracy vs. experts.",
      github: ""
    },
  ]

  return (
    <section id="projects" className="py-12 border-b border-neutral-800">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-3">
          {projects.map((project) => (
            <li key={project.id} className="text-[15px]">
              <span className="font-semibold">{project.title}</span>
              <span> — {project.description}</span>
              {project.github && (
                <>
                  {' '}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    [code]
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
