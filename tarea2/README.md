# Tarea 2 — Comunicación entre componentes siblings

Aplicación en Angular donde un componente padre coordina dos hijos al mismo nivel: la lista de
libros y el detalle del libro seleccionado.

## Correr el proyecto

```bash
npm install
npm start
```

Angular levanta en http://localhost:4200.

## Componentes

| Componente | Rol |
| --- | --- |
| `Biblioteca` | Padre. Guarda el arreglo de libros y cuál está seleccionado. |
| `ListaLibros` | Panel izquierdo. Pinta la lista y avisa cuál se clickeó. |
| `DetalleLibro` | Panel derecho. Muestra el título seleccionado y el botón Limpiar. |

`App` solo inserta a `Biblioteca`, sin Router.

## Cómo se comunican los siblings

Los dos paneles nunca se hablan directo: todo pasa por el padre.

**Lista → padre → detalle**

1. `ListaLibros` recibe `libros` y `seleccionado` por `@Input()`.
2. Al hacer click emite el título con `@Output() seleccionar`.
3. `Biblioteca` guarda ese valor en `libroSeleccionado`.
4. Ese mismo valor baja al otro hijo por `[libro]`, y de regreso a la lista por `[seleccionado]`
   para pintar el highlight.

**Detalle → padre → lista**

1. El botón Limpiar emite `@Output() limpiar`.
2. El padre pone `libroSeleccionado` en `null`.
3. El detalle vuelve al mensaje de "no has seleccionado nada" y la lista pierde el highlight,
   porque ambos dependen del mismo dato del padre.

## Detalles de la implementación

- La lista se pinta con el bloque `@for` de Angular.
- Cada elemento es un `<button>` y no un `<li>` con click, para que funcione con teclado.
- El highlight se aplica con `[class.activo]="libro === seleccionado"`.
- El botón Limpiar existe solo cuando hay selección, gracias al `@if` del template.
