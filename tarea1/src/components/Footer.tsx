import { perfil } from '../data/cv'

function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-ink-soft">
      <p>
        {perfil.nombre} · {perfil.ubicacion}
      </p>
      <p className="mt-1">
        <a className="hover:text-accent" href={`mailto:${perfil.email}`}>
          {perfil.email}
        </a>{' '}
        · {perfil.telefono}
      </p>
    </footer>
  )
}

export default Footer
