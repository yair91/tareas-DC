import { sobreMi } from '../data/cv'
import Seccion from './Seccion'

function About() {
  return (
    <Seccion id="sobre-mi" titulo="Sobre mí">
      <div className="max-w-3xl space-y-4 text-ink-soft">
        {sobreMi.map((parrafo) => (
          <p key={parrafo.slice(0, 24)}>{parrafo}</p>
        ))}
      </div>
    </Seccion>
  )
}

export default About
