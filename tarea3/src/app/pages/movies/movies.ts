import { Component, computed, inject, signal } from '@angular/core';
import { Movie } from '../../shared/models/movie';
import { EMPTY_FILTER, MovieFilter } from '../../shared/models/movie-filter';
import { FavoritesService } from '../../shared/services/favorites.service';
import { MoviesService } from '../../shared/services/movies.service';
import { MovieCard } from '../../shared/components/movie-card/movie-card';
import { MovieFilters } from '../../shared/components/movie-filters/movie-filters';

@Component({
  selector: 'app-movies',
  imports: [MovieCard, MovieFilters],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  private readonly moviesService = inject(MoviesService);
  protected readonly favoritesService = inject(FavoritesService);

  readonly genres = this.moviesService.getGenres();
  readonly years = this.moviesService.getYears();
  readonly total = this.moviesService.getAll().length;

  private readonly filter = signal<MovieFilter>(EMPTY_FILTER);
  readonly movies = computed(() => this.moviesService.filter(this.filter()));

  onFilterChange(filter: MovieFilter) {
    this.filter.set(filter);
  }

  onFavoriteToggle(movie: Movie) {
    this.favoritesService.toggle(movie);
  }
}
