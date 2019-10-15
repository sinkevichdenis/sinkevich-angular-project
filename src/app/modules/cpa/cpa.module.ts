import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// library modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';

// feature components
import { BalancePageComponent } from './components/pages/balance-page/balance-page.component';
import { PlusPageComponent } from './components/pages/plus-page/plus-page.component';
import { MinusPageComponent } from './components/pages/minus-page/minus-page.component';
import { HistoryPageComponent } from './components/pages/history-page/history-page.component';
import { CpaContainerComponent } from './components/cpa-container/cpa-container.component';

@NgModule({
  declarations: [
    BalancePageComponent,
    PlusPageComponent,
    MinusPageComponent,
    HistoryPageComponent,
    CpaContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    CpaContainerComponent
  ]
})
export class CpaModule { }
