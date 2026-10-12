import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../../models/movie';
import { PosterFallback } from '../../directives/poster-fallback.directive';
import { FavoriteButton } from '../favorite-button/favorite-button';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink, PosterFallback, FavoriteButton],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  @Input({ required: true }) movie!: Movie;
  @Input() isFavorite = false;

  @Output() favoriteToggle = new EventEmitter<Movie>();

  onToggle() {
    this.favoriteToggle.emit(this.movie);
  }
}
