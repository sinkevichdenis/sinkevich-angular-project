import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainComponent } from './components/main/main.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ContactsPageComponent } from './components/pages/contacts-page/contacts-page.component';
import { FeedbacksPageComponent } from './components/pages/feedbacks-page/feedbacks-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';

@NgModule({
  declarations: [
    MainComponent,
    HomePageComponent,
    ContactsPageComponent,
    FeedbacksPageComponent,
    ErrorPageComponent,
    AccountPageComponent
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
