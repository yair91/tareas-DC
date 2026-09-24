import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-libros',
  imports: [],
  templateUrl: './lista-libros.html',
  styleUrl: './lista-libros.css',
})
export class ListaLibros {
  @Input() libros: string[] = [];
  @Input() seleccionado: string | null = null;

  @Output() seleccionar = new EventEmitter<string>();

  elegir(libro: string) {
    this.seleccionar.emit(libro);
  }
}
