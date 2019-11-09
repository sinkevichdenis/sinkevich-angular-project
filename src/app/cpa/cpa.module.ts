import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

// library modules
import { MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';

// feature components
import { BalancePageComponent } from './components/balance-page/balance-page.component';
import { PlusPageComponent } from './components/plus-page/plus-page.component';
import { MinusPageComponent } from './components/minus-page/minus-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { CpaComponent } from './cpa.component';
import { BalanceContainerComponent } from './components/balance-container/balance-container.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { DateRangeFormComponent } from './components/date-range-form/date-range-form.component';
import { PaymentContainerComponent } from './components/payment-container/payment-container.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { HistoryElementComponent } from './components/history-element/history-element.component';

// custom directive
import { CurrencyDirective } from './directives/currency.directive';

// services
import { CpaRoutingService } from './services/cpa-routing.service';
import { CategoryService } from './services/category.service';
import { PaymentService } from './services/payment.service';
import { BalanceResolver } from './guards/balance.resolver';

const routes: Route[] = [
  { path: 'history', component: HistoryPageComponent, pathMatch: 'full' },
  { path: 'plus', component: PlusPageComponent, pathMatch: 'full' },
  { path: 'minus', component: MinusPageComponent, pathMatch: 'full' },
  {
    path: 'balance',
    component: BalancePageComponent,
    pathMatch: 'full',
    resolve: {
      payments: BalanceResolver
    }
  }
];

@NgModule({
  declarations: [
    BalancePageComponent,
    PlusPageComponent,
    MinusPageComponent,
    HistoryPageComponent,
    CpaComponent,
    BalanceContainerComponent,
    PaymentFormComponent,
    CategoryFormComponent,
    CurrencyDirective,
    DateRangeFormComponent,
    PaymentContainerComponent,
    HistoryListComponent,
    HistoryElementComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatTabsModule,
    MatToolbarModule,
    SharedModule
  ],
  exports: [
    CpaComponent
  ],
  providers: [
    CpaRoutingService,
    CategoryService,
    PaymentService,
    BalanceResolver
  ]
})
export class CpaModule { }
