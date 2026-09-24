import { educacion } from '../data/cv'
import Seccion from './Seccion'

function Educacion() {
  return (
    <Seccion id="educacion" titulo="Educación">
      <ul className="grid gap-4 sm:grid-cols-2">
        {educacion.map((estudio) => (
          <li key={estudio.institucion} className="rounded-xl border border-line bg-white p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold">{estudio.institucion}</h3>
              <p className="text-sm text-ink-soft">{estudio.periodo}</p>
            </div>
            <p className="mt-1 text-sm font-medium text-accent">{estudio.titulo}</p>
            <p className="mt-3 text-sm text-ink-soft">{estudio.detalle}</p>
          </li>
        ))}
      </ul>
    </Seccion>
  )
}

export default Educacion
