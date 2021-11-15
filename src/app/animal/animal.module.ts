import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimalComponent } from './animal/animal.component';

@NgModule({
  declarations: [AnimalComponent],
  imports: [CommonModule],
  exports: [AnimalComponent],
})
export class AnimalModule {}
