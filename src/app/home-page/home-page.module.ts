import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BenefitComponent } from './components/benefit/benefit.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideComponent } from './components/slide/slide.component';
import { SpeechComponent } from './components/speech/speech.component';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    BenefitComponent,
    CarouselComponent,
    SlideComponent,
    SpeechComponent
  ],
  imports: [
    SharedModule
  ]
})
export class HomePageModule { }
