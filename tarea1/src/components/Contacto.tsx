import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import Seccion from './Seccion'

type Formulario = {
  nombre: string
  email: string
  asunto: string
  mensaje: string
}

const vacio: Formulario = { nombre: '', email: '', asunto: '', mensaje: '' }

function Contacto() {
  const [datos, setDatos] = useState<Formulario>(vacio)
  const [enviado, setEnviado] = useState(false)

  function actualizar(evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = evento.target
    setDatos((previo) => ({ ...previo, [name]: value }))
  }

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    console.log('Datos del formulario de contacto:', datos)
    setEnviado(true)
  }

  function nuevoMensaje() {
    setDatos(vacio)
    setEnviado(false)
  }

  return (
    <Seccion
      id="contacto"
      titulo="Contacto"
      intro="Escríbeme y te respondo. El formulario no manda nada a un servidor: imprime los datos en la consola del navegador."
    >
      <div aria-live="polite">
        {enviado ? (
          <div className="max-w-xl rounded-xl border border-accent bg-accent-soft p-6">
            <h3 className="text-lg font-semibold text-accent">Mensaje registrado</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Gracias, {datos.nombre || 'visitante'}. Revisa la consola del navegador para ver lo que
              enviaste.
            </p>
            <dl className="mt-4 space-y-1 text-sm">
              <div className="flex gap-2">
                <dt className="font-medium">Correo:</dt>
                <dd className="text-ink-soft">{datos.email}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium">Asunto:</dt>
                <dd className="text-ink-soft">{datos.asunto}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium">Mensaje:</dt>
                <dd className="text-ink-soft">{datos.mensaje}</dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={nuevoMensaje}
              className="mt-5 rounded-full border border-accent px-4 py-2 text-sm font-medium text-accent hover:bg-white"
            >
              Escribir otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={enviar} noValidate={false} className="max-w-xl space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                autoComplete="name"
                value={datos.nombre}
                onChange={actualizar}
                className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Correo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={datos.email}
                onChange={actualizar}
                className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="asunto" className="block text-sm font-medium">
                Asunto
              </label>
              <input
                id="asunto"
                name="asunto"
                type="text"
                required
                value={datos.asunto}
                onChange={actualizar}
                className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                value={datos.mensaje}
                onChange={actualizar}
                aria-describedby="ayuda-mensaje"
                className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm"
              />
              <p id="ayuda-mensaje" className="mt-1 text-xs text-ink-soft">
                Cuéntame en un par de líneas de qué se trata.
              </p>
            </div>

            <button
              type="submit"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-ink"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </Seccion>
  )
}

export default Contacto
