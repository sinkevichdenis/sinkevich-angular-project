import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// main pages
import { HomePageComponent } from '../home-page/home-page.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { ContactsPageComponent } from '../contacts-page/contacts-page.component';
import { FeedbacksPageComponent } from '../feedbacks-page/feedbacks-page.component';
import { AccountPageComponent } from '../account-page/account-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'account', component: AccountPageComponent, loadChildren: '../cpa/cpa.module#CpaModule'},
  { path: 'contacts', component: ContactsPageComponent, pathMatch: 'full'},
  { path: 'feedbacks', component: FeedbacksPageComponent, pathMatch: 'full'},
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
