import { computed, Injectable, signal } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  // unica fuente de verdad, solo vive en memoria mientras corre la app
  private readonly favoritesState = signal<Movie[]>([]);

  readonly favorites = this.favoritesState.asReadonly();
  readonly count = computed(() => this.favoritesState().length);

  getFavorites(): Movie[] {
    return this.favoritesState();
  }

  add(movie: Movie): void {
    if (this.isFavorite(movie.id)) return;
    this.favoritesState.update((list) => [...list, movie]);
  }

  remove(id: number): void {
    this.favoritesState.update((list) => list.filter((movie) => movie.id !== id));
  }

  toggle(movie: Movie): void {
    if (this.isFavorite(movie.id)) {
      this.remove(movie.id);
    } else {
      this.add(movie);
    }
  }

  isFavorite(id: number): boolean {
    return this.favoritesState().some((movie) => movie.id === id);
  }
}
