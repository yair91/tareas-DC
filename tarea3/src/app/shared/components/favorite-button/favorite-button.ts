import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-favorite-button',
  imports: [NgClass],
  templateUrl: './favorite-button.html',
  styleUrl: './favorite-button.css',
})
export class FavoriteButton {
  @Input() active = false;
  @Input() size: 'sm' | 'lg' = 'sm';

  @Output() toggled = new EventEmitter<void>();

  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.toggled.emit();
  }
}
