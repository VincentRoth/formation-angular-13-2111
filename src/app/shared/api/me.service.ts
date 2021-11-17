import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MeService {
  private rights = ['ANIMAL_GET'];

  constructor() {}

  hasRight(right: string): boolean {
    return this.rights.includes(right);
  }
}
