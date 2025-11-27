const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <ul className="space-y-2 text-[15px]">
          <li>
            <span className="font-semibold">Email:</span>{' '}
            <a href="mailto:eharianto@stanford.edu" className="underline">eharianto@stanford.edu</a>
          </li>
          <li>
            <span className="font-semibold">GitHub:</span>{' '}
            <a href="https://github.com/ethanharianto" target="_blank" rel="noopener noreferrer" className="underline">
              github.com/ethanharianto
            </a>
          </li>
          <li>
            <span className="font-semibold">LinkedIn:</span>{' '}
            <a href="https://linkedin.com/in/ethan-harianto" target="_blank" rel="noopener noreferrer" className="underline">
              linkedin.com/in/ethan-harianto
            </a>
          </li>
          <li>
            <span className="font-semibold">Resume:</span>{' '}
            <a href="/Ethan_Harianto_Resume.pdf" target="_blank" rel="noopener noreferrer" className="underline">
              PDF
            </a>
          </li>
          <li className="text-sm text-neutral-400">Bay Area, CA</li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
