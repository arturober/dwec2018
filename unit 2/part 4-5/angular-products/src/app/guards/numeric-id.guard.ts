import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumericIdGuard implements CanActivate {
  constructor (private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const id = +next.params.id;
    if (isNaN(id) || id < 1) {
      this.router.navigate(['/products']); // Go to products page instead
      return false; // Can't activate products detail
    }
    return true;
  }
}
