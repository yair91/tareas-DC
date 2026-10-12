import { Injectable } from '@angular/core';
import { MOVIES } from '../data/movies.data';
import { Movie } from '../models/movie';
import { MovieFilter } from '../models/movie-filter';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private readonly movies: readonly Movie[] = MOVIES;

  getAll(): readonly Movie[] {
    return this.movies;
  }

  getById(id: number): Movie | undefined {
    return this.movies.find((movie) => movie.id === id);
  }

  getGenres(): string[] {
    return [...new Set(this.movies.map((movie) => movie.genre))].sort((a, b) =>
      a.localeCompare(b),
    );
  }

  getYears(): number[] {
    return [...new Set(this.movies.map((movie) => movie.year))].sort((a, b) => b - a);
  }

  filter(filter: MovieFilter): Movie[] {
    const term = normalize(filter.term);

    return this.movies.filter((movie) => {
      if (filter.genre && movie.genre !== filter.genre) return false;
      if (filter.year && movie.year !== filter.year) return false;
      if (!term) return true;

      const fields =
        filter.criteria === 'all'
          ? [movie.title, movie.director, movie.producer, movie.genre, String(movie.year)]
          : [String(movie[filter.criteria])];

      return fields.some((field) => normalize(field).includes(term));
    });
  }
}

// quita acentos y mayusculas para que "accion" encuentre "Acción"
function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}
