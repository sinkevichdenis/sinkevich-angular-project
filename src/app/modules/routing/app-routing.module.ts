import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// main pages
import { HomePageComponent } from '../main/components/pages/home-page/home-page.component';
import { ErrorPageComponent } from '../main/components/pages/error-page/error-page.component';
import { ContactsPageComponent } from '../main/components/pages/contacts-page/contacts-page.component';
import { FeedbacksPageComponent } from '../main/components/pages/feedbacks-page/feedbacks-page.component';
import { AccountPageComponent } from '../main/components/pages/account-page/account-page.component';

// account pages
import { HistoryPageComponent } from '../cpa/components/pages/history-page/history-page.component';
import { PlusPageComponent } from '../cpa/components/pages/plus-page/plus-page.component';
import { MinusPageComponent } from '../cpa/components/pages/minus-page/minus-page.component';
import { BalancePageComponent } from '../cpa/components/pages/balance-page/balance-page.component';

const accountRoutes: Routes = [
  { path: 'history', component: HistoryPageComponent, pathMatch: 'full' },
  { path: 'plus', component: PlusPageComponent, pathMatch: 'full' },
  { path: 'minus', component: MinusPageComponent, pathMatch: 'full' },
  { path: 'balance', component: BalancePageComponent, pathMatch: 'full' }
];

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'account', component: AccountPageComponent, children: accountRoutes},
  { path: 'contacts', component: ContactsPageComponent, pathMatch: 'full' },
  { path: 'feedbacks', component: FeedbacksPageComponent, pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
