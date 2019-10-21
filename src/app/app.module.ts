import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AuthGuard } from './modules/auth/guards/auth.guard';

import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { AccountPageModule } from './modules/account-page/account-page.module';
import { ContactsPageModule } from './modules/contacts-page/contacts-page.module';
import { FeedbacksPageModule } from './modules/feedbacks-page/feedbacks-page.module';
import { HomePageModule } from './modules/home-page/home-page.module';
import { ErrorPageModule } from './modules/error-page/error-page.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
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
    ErrorPageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
