import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss'],
})
export class AnimalItemComponent {
  @Input() model: Animal;
  @Output() itemDeletion = new EventEmitter<Animal>();

  deleteItem(event: MouseEvent) {
    // Pour information
    console.log(event);

    this.itemDeletion.emit(this.model);
  }
}
