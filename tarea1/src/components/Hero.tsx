import { perfil } from '../data/cv'

function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo-hero" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">{perfil.rol}</p>
        <h1 id="titulo-hero" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          {perfil.nombre}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">{perfil.resumen}</p>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <div>
            <dt className="text-ink-soft">Ubicación</dt>
            <dd className="font-medium">{perfil.ubicacion}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">Correo</dt>
            <dd className="font-medium">
              <a className="hover:text-accent" href={`mailto:${perfil.email}`}>
                {perfil.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-ink-soft">LinkedIn</dt>
            <dd className="font-medium">
              <a className="hover:text-accent" href={perfil.linkedin} target="_blank" rel="noreferrer">
                emmanuel-arias
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contacto"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-ink"
          >
            Contáctame
          </a>
          <a
            href="#proyectos"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
