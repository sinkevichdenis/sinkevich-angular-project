import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CpaRoutingService {

  constructor(
    private router: Router
  ) { }

  navigateVisitor(): void {
    this.router.navigate(['/account/balance']);
  }

  goToPlusPage(): void {
    this.router.navigate(['/account/plus']);
  }

  goToMinusPage(): void {
    this.router.navigate(['/account/minus']);
  }
}
