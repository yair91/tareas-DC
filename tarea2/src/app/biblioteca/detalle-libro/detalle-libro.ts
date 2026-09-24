import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-libro',
  imports: [],
  templateUrl: './detalle-libro.html',
  styleUrl: './detalle-libro.css',
})
export class DetalleLibro {
  @Input() libro: string | null = null;

  @Output() limpiar = new EventEmitter<void>();

  limpiarSeleccion() {
    this.limpiar.emit();
  }
}
