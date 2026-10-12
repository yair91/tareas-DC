import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../../shared/models/movie';
import { FavoritesService } from '../../shared/services/favorites.service';
import { MovieCard } from '../../shared/components/movie-card/movie-card';

@Component({
  selector: 'app-favorites',
  imports: [RouterLink, MovieCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  private readonly favoritesService = inject(FavoritesService);

  readonly favorites = this.favoritesService.favorites;

  remove(movie: Movie) {
    this.favoritesService.remove(movie.id);
  }
}
