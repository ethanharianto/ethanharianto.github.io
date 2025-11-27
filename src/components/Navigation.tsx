const Navigation = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-40 border-b border-neutral-800 bg-[#0b0b0f]">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="font-semibold">Ethan Harianto</a>
        <div className="flex items-center gap-4 text-sm">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:underline">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
