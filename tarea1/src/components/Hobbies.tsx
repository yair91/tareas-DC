import { hobbies } from '../data/cv'
import Seccion from './Seccion'

function Hobbies() {
  return (
    <Seccion id="hobbies" titulo="Hobbies" intro="Lo que hago cuando cierro la laptop.">
      <ul className="grid gap-4 sm:grid-cols-2">
        {hobbies.map((hobby) => (
          <li key={hobby.nombre} className="rounded-xl border border-line bg-white p-6">
            <h3 className="text-lg font-semibold">{hobby.nombre}</h3>
            <p className="mt-2 text-sm text-ink-soft">{hobby.descripcion}</p>
          </li>
        ))}
      </ul>
    </Seccion>
  )
}

export default Hobbies
