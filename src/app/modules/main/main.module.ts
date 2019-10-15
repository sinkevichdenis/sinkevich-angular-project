import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// feature modules
import { CpaModule } from '../cpa/cpa.module';
import { MatTabsModule } from '@angular/material/tabs';

// page-container components
import { MainComponent } from './components/main/main.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ContactsPageComponent } from './components/pages/contacts-page/contacts-page.component';
import { FeedbacksPageComponent } from './components/pages/feedbacks-page/feedbacks-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';

// structural components
import { SlideComponent } from './components/pages/home-page/slide/slide.component';
import { CarouselComponent } from './components/pages/home-page/carousel/carousel.component';
import { SpeechComponent } from './components/pages/home-page/speech/speech.component';
import { BenefitComponent } from './components/pages/home-page/benefit/benefit.component';
import {AuthModule} from '../auth/auth.module';

@NgModule({
  declarations: [
    MainComponent,
    HomePageComponent,
    ContactsPageComponent,
    FeedbacksPageComponent,
    ErrorPageComponent,
    AccountPageComponent,
    SlideComponent,
    CarouselComponent,
    SpeechComponent,
    BenefitComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CpaModule,
    MatTabsModule,
    AuthModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
