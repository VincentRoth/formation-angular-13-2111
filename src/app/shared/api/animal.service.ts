import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}

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
