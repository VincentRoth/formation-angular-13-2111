import { Injectable, Injector } from '@angular/core';
import { AbstractCrudService } from './abstract-crud.service';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService extends AbstractCrudService<Animal> {
  constructor(injector: Injector) {
    super(injector, 'animals');
  }
}
