import { proyectos } from '../data/cv'
import Seccion from './Seccion'

function Proyectos() {
  return (
    <Seccion
      id="proyectos"
      titulo="Proyectos"
      intro="Cosas que salieron a producción y que sí se usaron."
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {proyectos.map((proyecto) => (
          <li
            key={proyecto.nombre}
            className="rounded-xl border border-line bg-white p-6 transition-colors hover:border-accent"
          >
            <p className="text-xs uppercase tracking-widest text-accent">{proyecto.contexto}</p>
            <h3 className="mt-2 text-lg font-semibold">{proyecto.nombre}</h3>
            <p className="mt-3 text-sm text-ink-soft">{proyecto.descripcion}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologías de ${proyecto.nombre}`}>
              {proyecto.stack.map((tec) => (
                <li key={tec} className="rounded-full bg-accent-soft px-3 py-1 text-xs text-accent">
                  {tec}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Seccion>
  )
}

export default Proyectos
