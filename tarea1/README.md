# Tarea 1 — CV en línea

SPA con mi currículum, hecha con React, Vite y TypeScript.

## Correr el proyecto

```bash
npm install
npm run dev
```

Vite levanta en http://localhost:5173.

Otros scripts: `npm run build` (compila TS y genera `dist/`) y `npm run preview` (sirve el build).

## Estructura

```
src/
  App.tsx              layout de la página y orden de las secciones
  data/cv.ts           toda la información del CV, tipada
  components/
    Header.tsx         navegación fija con anclas
    Hero.tsx           sección principal
    About.tsx          acerca de mí
    Proyectos.tsx      proyectos
    Tecnologias.tsx    stack + línea de tiempo de experiencia
    Educacion.tsx      educación
    Hobbies.tsx        hobbies
    Contacto.tsx       formulario de contacto
    Seccion.tsx        contenedor reutilizable de sección
    Footer.tsx         pie de página
```

El contenido vive en `src/data/cv.ts`, así que los componentes solo se encargan de pintarlo.

## Formulario de contacto

No manda nada a ningún servidor. Al hacer submit:

1. `preventDefault()` para que el navegador no recargue.
2. `console.log` con el objeto que llenó el usuario.
3. Cambia el estado `enviado` a `true` y en lugar del formulario aparece la confirmación con los datos capturados.

Con el botón "Escribir otro mensaje" se limpia el estado y regresa el formulario.

## Autoevaluación

Está en [AUTOEVALUACION.md](./AUTOEVALUACION.md).
