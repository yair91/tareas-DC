# Tarea 3 — Películas Favoritas

Aplicación en Angular para consultar un catálogo de películas, filtrarlas y administrar una lista
de favoritas. Las películas están definidas en el código y los favoritos viven solo en memoria
(un servicio con signals), sin APIs, backend, LocalStorage ni cookies.

## Correr el proyecto

```bash
npm install
npm start
```

Angular levanta en http://localhost:4200.

## Rutas

| Ruta | Página |
| --- | --- |
| `/` | Catálogo con filtros |
| `/movies/:id` | Detalle de la película, agregar o quitar de favoritos |
| `/favorites` | Películas favoritas, ver detalle o quitar |

Cualquier otra ruta redirige al catálogo. Toda la navegación usa `routerLink`, sin recargar.

## Estructura

```
src/app/
├── pages/
│   ├── movies/          catálogo + filtros
│   ├── movie-detail/    detalle por id
│   └── favorites/       lista de favoritos
└── shared/
    ├── components/
    │   ├── movie-card/       tarjeta (@Input movie, isFavorite / @Output favoriteToggle)
    │   ├── movie-filters/    formulario reactivo (@Output filterChange)
    │   └── favorite-button/  botón estrella (@Input active / @Output toggled)
    ├── services/
    │   ├── movies.service.ts     catálogo y lógica de filtrado
    │   └── favorites.service.ts  estado de favoritos en memoria
    ├── models/          interfaces Movie y MovieFilter
    ├── directives/      PosterFallback (imagen de respaldo si el poster falla)
    └── data/            películas hardcodeadas
```

## Filtrado

El formulario es un Reactive Form. Se puede buscar texto en todos los campos o solo en título,
director, productor, género o año, y combinarlo con los selects de género y año. Cada cambio del
formulario se emite al padre con `@Output`, que actualiza un signal y la lista se recalcula al
momento. La búsqueda ignora mayúsculas y acentos.

## Favoritos

`FavoritesService` es la única fuente de verdad:

- `getFavorites()` / `favorites` consultar la lista
- `add(movie)` agregar
- `remove(id)` eliminar
- `isFavorite(id)` saber si ya está marcada
- `toggle(movie)` alternar

El catálogo, el detalle, la página de favoritos y el contador del header leen del mismo servicio,
así que al quitar una película desaparece de inmediato de `/favorites` y se actualiza en todos
lados.
