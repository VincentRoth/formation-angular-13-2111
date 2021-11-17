import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum Right {
  ANIMAL_GET = 'ANIMAL_GET',
}

@Injectable({
  providedIn: 'root',
})
export class MeService {
  private rights = [Right.ANIMAL_GET];

  constructor() {}

  hasRight(right: Right): boolean {
    return this.rights.includes(right);
  }

  hasRight$(right: Right): Observable<boolean> {
    return of(this.rights.includes(right));
  }
}
