import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimalComponent } from './animal/animal.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalItemComponent } from './animal-item/animal-item.component';

@NgModule({
  declarations: [AnimalComponent, AnimalListComponent, AnimalItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [AnimalComponent, AnimalListComponent],
})
export class AnimalModule {}
