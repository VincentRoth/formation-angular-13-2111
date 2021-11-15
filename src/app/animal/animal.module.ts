import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimalComponent } from './animal/animal.component';
import { AnimalListComponent } from './animal-list/animal-list.component';

@NgModule({
  declarations: [AnimalComponent, AnimalListComponent],
  imports: [CommonModule],
  exports: [AnimalComponent, AnimalListComponent],
})
export class AnimalModule {}
