import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalancePageComponent } from './components/pages/balance-page/balance-page.component';
import { PlusPageComponent } from './components/pages/plus-page/plus-page.component';
import { MinusPageComponent } from './components/pages/minus-page/minus-page.component';
import { HistoryPageComponent } from './components/pages/history-page/history-page.component';

@NgModule({
  declarations: [
    BalancePageComponent,
    PlusPageComponent,
    MinusPageComponent,
    HistoryPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CpaModule { }
