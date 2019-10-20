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
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { PaymentLatestComponent } from './components/payment-latest/payment-latest.component';
import { CpaRoutingService } from './services/cpa-routing.service';

const routes = CpaRoutingService.routes;

@NgModule({
  declarations: [
    BalancePageComponent,
    PlusPageComponent,
    MinusPageComponent,
    HistoryPageComponent,
    CpaComponent,
    BalanceContainerComponent,
    PaymentFormComponent,
    PaymentLatestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    CpaComponent
  ],
  providers: [
    CpaRoutingService
  ]
})
export class CpaModule { }
