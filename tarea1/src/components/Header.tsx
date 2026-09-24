const enlaces = [
  { href: '#sobre-mi', texto: 'Sobre mí' },
  { href: '#proyectos', texto: 'Proyectos' },
  { href: '#tecnologias', texto: 'Tecnologías' },
  { href: '#educacion', texto: 'Educación' },
  { href: '#hobbies', texto: 'Hobbies' },
  { href: '#contacto', texto: 'Contacto' },
]

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-4"
      >
        <a href="#inicio" className="text-sm font-semibold tracking-tight">
          Yair Arias
        </a>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a href={enlace.href} className="rounded hover:text-accent">
                {enlace.texto}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
