import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

// library modules
import { MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';

// feature components
import { BalancePageComponent } from './components/balance-page/balance-page.component';
import { PlusPageComponent } from './components/plus-page/plus-page.component';
import { MinusPageComponent } from './components/minus-page/minus-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { CpaComponent } from './cpa.component';
import { BalanceContainerComponent } from './components/balance-page/balance-container/balance-container.component';

const routes: Route[] = [
  { path: 'history', component: HistoryPageComponent, pathMatch: 'full' },
  { path: 'plus', component: PlusPageComponent, pathMatch: 'full' },
  { path: 'minus', component: MinusPageComponent, pathMatch: 'full' },
  { path: 'balance', component: BalancePageComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    BalancePageComponent,
    PlusPageComponent,
    MinusPageComponent,
    HistoryPageComponent,
    CpaComponent,
    BalanceContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    CpaComponent
  ]
})
export class CpaModule { }
