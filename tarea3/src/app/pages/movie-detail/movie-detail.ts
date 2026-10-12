import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { FavoritesService } from '../../shared/services/favorites.service';
import { MoviesService } from '../../shared/services/movies.service';
import { FavoriteButton } from '../../shared/components/favorite-button/favorite-button';
import { PosterFallback } from '../../shared/directives/poster-fallback.directive';

@Component({
  selector: 'app-movie-detail',
  imports: [RouterLink, FavoriteButton, PosterFallback],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly moviesService = inject(MoviesService);
  private readonly favoritesService = inject(FavoritesService);

  private readonly movieId = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: 0 },
  );

  readonly movie = computed(() => this.moviesService.getById(this.movieId()));
  readonly isFavorite = computed(() => {
    const movie = this.movie();
    return movie ? this.favoritesService.isFavorite(movie.id) : false;
  });

  toggleFavorite() {
    const movie = this.movie();
    if (movie) {
      this.favoritesService.toggle(movie);
    }
  }
}
