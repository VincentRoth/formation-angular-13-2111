import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MeService } from '../api/me.service';

@Injectable({
  providedIn: 'root',
})
export class RightGuard implements CanActivate {
  constructor(private meService: MeService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.meService.hasRight$(route.data['right']);
  }
}
