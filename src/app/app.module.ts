import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/routing/app-routing.module';

import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { AccountPageModule } from './modules/account-page/account-page.module';
import { ContactsPageModule } from './modules/contacts-page/contacts-page.module';
import { FeedbacksPageModule } from './modules/feedbacks-page/feedbacks-page.module';
import { HomePageModule } from './modules/home-page/home-page.module';
import { ErrorPageModule } from './modules/error-page/error-page.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    AccountPageModule,
    ContactsPageModule,
    FeedbacksPageModule,
    HomePageModule,
    ErrorPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
