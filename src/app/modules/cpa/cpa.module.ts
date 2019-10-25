import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// library modules
import { MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

// feature components
import { BalancePageComponent } from './components/balance-page/balance-page.component';
import { PlusPageComponent } from './components/plus-page/plus-page.component';
import { MinusPageComponent } from './components/minus-page/minus-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { CpaComponent } from './cpa.component';
import { BalanceContainerComponent } from './components/balance-page/balance-container/balance-container.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CurrencyDirective } from './directives/currency.directive';
import { CpaRoutingService } from './services/cpa-routing.service';
import { CpaStateService } from './services/cpa-state.service';
import {CategoryService} from './services/category.service';
import {PaymentService} from './services/payment.service';

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
    CalculatorComponent,
    CategoryFormComponent,
    CurrencyDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    AngularDateTimePickerModule
  ],
  exports: [
    CpaComponent
  ],
  providers: [
    CpaRoutingService,
    CpaStateService,
    CategoryService,
    PaymentService
  ]
})
export class CpaModule { }
