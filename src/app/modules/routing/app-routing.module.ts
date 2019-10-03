import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from '../main/components/pages/home-page/home-page.component';
import { ErrorPageComponent } from '../main/components/pages/error-page/error-page.component';
import { ContactsPageComponent } from '../main/components/pages/contacts-page/contacts-page.component';
import { FeedbacksPageComponent } from '../main/components/pages/feedbacks-page/feedbacks-page.component';
import { AccountPageComponent } from '../main/components/pages/account-page/account-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'account', component: AccountPageComponent, pathMatch: 'full' },
  { path: 'contacts', component: ContactsPageComponent, pathMatch: 'full' },
  { path: 'feedbacks', component: FeedbacksPageComponent, pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
