import { Component } from '@angular/core';
import { Biblioteca } from './biblioteca/biblioteca';

@Component({
  selector: 'app-root',
  imports: [Biblioteca],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
