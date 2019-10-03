import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { FeedbacksComponent } from './components/pages/feedbacks/feedbacks.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { AccountComponent } from './components/pages/account/account.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    ContactsComponent,
    FeedbacksComponent,
    ErrorComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
