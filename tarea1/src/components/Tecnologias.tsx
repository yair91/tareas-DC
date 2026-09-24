import { experiencia, tecnologias } from '../data/cv'
import Seccion from './Seccion'

function Tecnologias() {
  return (
    <Seccion
      id="tecnologias"
      titulo="Tecnologías y experiencia"
      intro="Con lo que trabajo y dónde lo he usado."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tecnologias.map((bloque) => (
          <div key={bloque.grupo} className="rounded-xl border border-line bg-white p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">{bloque.grupo}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
              {bloque.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ol className="mt-12 space-y-8 border-l border-line pl-6">
        {experiencia.map((puesto) => (
          <li key={`${puesto.empresa}-${puesto.puesto}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-accent"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {puesto.puesto} · {puesto.empresa}
              </h3>
              <p className="text-sm text-ink-soft">{puesto.periodo}</p>
            </div>
            <p className="text-sm text-ink-soft">{puesto.ubicacion}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink-soft marker:text-accent">
              {puesto.logros.map((logro) => (
                <li key={logro.slice(0, 32)}>{logro}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Seccion>
  )
}

export default Tecnologias
