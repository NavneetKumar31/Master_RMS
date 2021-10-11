import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private _router: Router) {}

  rootRouting(path: string): void {
    this._router.navigate([path.toLowerCase()]);
  }

  restaurantRouting(path: string): void {
    this._router.navigate(['restaurant', path.toLowerCase()]);
  }

  barRouting(path: string): void {
    this._router.navigate(['bar', path.toLowerCase()]);
  }

  hotelRouting(path: string): void {
    this._router.navigate(['hotel', path.toLowerCase()]);
  }
}
