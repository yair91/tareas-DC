import { Component } from '@angular/core';
import { DetalleLibro } from './detalle-libro/detalle-libro';
import { ListaLibros } from './lista-libros/lista-libros';

@Component({
  selector: 'app-biblioteca',
  imports: [ListaLibros, DetalleLibro],
  templateUrl: './biblioteca.html',
  styleUrl: './biblioteca.css',
})
export class Biblioteca {
  libros: string[] = [
    'Cien años de soledad',
    'Pedro Páramo',
    'El llano en llamas',
    'Rayuela',
    'La sombra del viento',
    'Ficciones',
    'Aura',
    'Los detectives salvajes',
  ];

  libroSeleccionado: string | null = null;

  seleccionarLibro(libro: string) {
    this.libroSeleccionado = libro;
  }

  limpiarSeleccion() {
    this.libroSeleccionado = null;
  }
}
