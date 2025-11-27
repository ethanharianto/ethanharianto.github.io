const About = () => {
  return (
    <section id="about" className="py-12 border-b border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 space-y-3">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-[15px]">
          I'm Ethan — Stanford MS CS & BS EE (’26). I build ML systems and infrastructure end‑to‑end:
          data ingestion, training & evaluation harnesses, and model serving for realtime products.
        </p>
        <p className="text-[15px]">
          Recent work: realtime speech assistant pipeline (STT → LLM → TTS → Lip‑Sync) over WebRTC
          with multi‑region deployment; self‑supervised CV for route grading; RL agent for Coup.
          I care about clarity, performance, and reliability.
        </p>
      </div>
    </section>
  )
}

export default About
