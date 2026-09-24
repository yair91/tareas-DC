import type { ReactNode } from 'react'

type Props = {
  id: string
  titulo: string
  intro?: string
  children: ReactNode
}

function Seccion({ id, titulo, intro, children }: Props) {
  const tituloId = `titulo-${id}`

  return (
    <section id={id} aria-labelledby={tituloId} className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 id={tituloId} className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {titulo}
        </h2>
        {intro ? <p className="mt-3 max-w-2xl text-ink-soft">{intro}</p> : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

export default Seccion
