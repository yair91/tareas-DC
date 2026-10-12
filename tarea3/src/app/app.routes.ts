import { Routes } from '@angular/router';
import { Movies } from './pages/movies/movies';
import { MovieDetail } from './pages/movie-detail/movie-detail';
import { Favorites } from './pages/favorites/favorites';

export const routes: Routes = [
  { path: '', component: Movies, title: 'Películas' },
  { path: 'movies/:id', component: MovieDetail, title: 'Detalle de película' },
  { path: 'favorites', component: Favorites, title: 'Mis favoritos' },
  { path: '**', redirectTo: '' },
];
