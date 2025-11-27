const About = () => {
  return (
    <section id="about" className="py-12 border-b border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 space-y-3">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-[15px]">
          I'm Ethan — MS CS & BS EE at Stanford (’26). I like building things that work well:
          from Go services and WebRTC backends to React/Next.js frontends, and Verilog/FPGA when it
          makes sense to go to hardware.
        </p>
        <p className="text-[15px]">
          Recent work includes a conversational assistant at Pantheon Lab, an accessibility‑first
          iOS app at Stanford’s PinCS Lab, and Slide Social. Focus areas: performance, reliability,
          and making interfaces feel effortless.
        </p>
      </div>
    </section>
  )
}

export default About
