import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MinusPageComponent } from '../components/minus-page/minus-page.component';
import { BalancePageComponent } from '../components/balance-page/balance-page.component';
import { HistoryPageComponent } from '../components/history-page/history-page.component';
import { PlusPageComponent } from '../components/plus-page/plus-page.component';

@Injectable()
export class CpaRoutingService {
  static routes: Route[] = [
    { path: 'history', component: HistoryPageComponent, pathMatch: 'full' },
    { path: 'plus', component: PlusPageComponent, pathMatch: 'full' },
    { path: 'minus', component: MinusPageComponent, pathMatch: 'full' },
    { path: 'balance', component: BalancePageComponent, pathMatch: 'full' }
  ];

  constructor(private router: Router) { }

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
