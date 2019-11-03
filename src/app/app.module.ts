import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { AccountPageModule } from './modules/account-page/account-page.module';
import { ContactsPageModule } from './modules/contacts-page/contacts-page.module';
import { FeedbacksPageModule } from './modules/feedbacks-page/feedbacks-page.module';
import { HomePageModule } from './modules/home-page/home-page.module';
import { ErrorPageModule } from './modules/error-page/error-page.module';
import { AppComponent } from './app.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    AccountPageModule,
    ContactsPageModule,
    FeedbacksPageModule,
    HomePageModule,
    ErrorPageModule
  ],
  providers: [
    AuthGuard,
    { provide: LOCALE_ID, useValue: 'ru' }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
