import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}

  // TypeScript https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
  // getAll(): Pick<Animal, 'name' | 'species'>[] {
  getAll(): Animal[] {
    return [
      {
        name: 'Idéfix',
        species: 'dog',
      },
      {
        name: 'Chatbus',
        species: 'cat',
      },
      {
        name: 'Teto',
        species: 'fox-squirrel',
      },
    ] as Animal[];
  }

  get(): Animal {
    return {
      name: 'Idéfix',
      species: 'dog',
      veterinarian: "Panoramix D'Armorique",
      comment:
        'Développe une allergie à la potion magique.\n Provient du service.',
      email: 'test1@gmail.com',
      phoneNumber: '06.12.34.56.78',
    };
  }
}
