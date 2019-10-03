import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../main/components/pages/home/home.component';
import { ErrorComponent } from '../main/components/pages/error/error.component';
import { ContactsComponent } from '../main/components/pages/contacts/contacts.component';
import { FeedbacksComponent } from '../main/components/pages/feedbacks/feedbacks.component';
import { AccountComponent } from '../main/components/pages/account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'account', component: AccountComponent, pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent, pathMatch: 'full' },
  { path: 'feedbacks', component: FeedbacksComponent, pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
