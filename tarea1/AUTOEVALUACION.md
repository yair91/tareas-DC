# Autoevaluación — Tarea 1

## Estructura

Cada sección que pedía la tarea es su propio componente (`Hero`, `About`, `Proyectos`,
`Tecnologias`, `Educacion`, `Hobbies`, `Contacto`), y `App.tsx` nada más los ordena. Saqué un
componente extra, `Seccion`, porque las seis secciones repetían el mismo contenedor, el mismo
título y el mismo `aria-labelledby`; dejarlo duplicado seis veces no tenía sentido.

Los datos están separados de la vista en `src/data/cv.ts` con sus tipos (`Experiencia`,
`Proyecto`, `Estudio`). Si mañana cambio de trabajo toco un solo archivo y no los componentes.

Lo que le falta: no hay router ni tests. No los pedía la tarea y es una sola página, pero si
esto creciera, el siguiente paso sería meter React Router y pruebas del formulario.

## Contenido

La experiencia, los proyectos y las métricas salen de mi CV real (Neostella, YAPSI, Eversoft),
no son texto de relleno. En proyectos preferí describir qué problema resolvía cada uno y no
solo listar tecnologías.

Pendiente: no hay enlaces a repos ni capturas de los proyectos, porque la mayoría son de
clientes y no son públicos.

## Diseño

Tailwind con un tema chico definido en `index.css` (tokens de color y tipografía) para no andar
escribiendo hex sueltos por todos lados. La paleta es sobria a propósito: fondo tipo papel, un
verde como acento y jerarquía por tamaño de texto más que por color.

El layout es responsivo con grids de una columna en móvil y dos o cuatro en pantallas grandes.
Lo probé desde 375px hasta escritorio.

Lo más flojo del diseño: no hay modo oscuro ni imágenes, la página es puro texto y tarjetas.

## Accesibilidad y usabilidad

- HTML semántico: `header`, `nav`, `main`, `section`, `footer`, listas reales para lo que es lista.
- Cada `section` tiene `aria-labelledby` apuntando a su `h2`, y los encabezados van en orden
  (h1 solo en el hero).
- Link de "Saltar al contenido" visible al tabular, para no recorrer todo el menú.
- El formulario usa `label` con `htmlFor` en los cuatro campos, `autoComplete` donde aplica y
  un texto de ayuda ligado con `aria-describedby`.
- La confirmación vive dentro de un contenedor con `aria-live="polite"`, así el lector de
  pantalla la anuncia sin que el usuario tenga que buscarla.
- `:focus-visible` con contorno propio y `prefers-reduced-motion` para desactivar el scroll suave.
- El contraste del texto principal y del acento contra el fondo pasa AA.

Lo que no alcancé: validación propia con mensajes de error por campo (hoy me apoyo en la
validación nativa del navegador con `required` y `type="email"`), y no lo he probado con un
lector de pantalla real, solo revisando el árbol de accesibilidad.

## Qué me costó

Decidir dónde cortar los componentes. Al inicio tenía las secciones repitiendo el mismo markup
de contenedor; me tomó un par de vueltas verlo y extraer `Seccion`. Lo otro fue el estado del
formulario: primero tenía cuatro `useState` sueltos y terminé con un solo objeto y un handler
que usa el `name` del input, que quedó bastante más limpio.
