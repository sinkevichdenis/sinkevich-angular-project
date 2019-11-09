import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BenefitComponent } from './components/benefit/benefit.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideComponent } from './components/slide/slide.component';
import { SpeechComponent } from './components/speech/speech.component';
import { HomePageComponent } from './home-page.component';

const routes: Route[] = [{
  path: '',
  component: HomePageComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [
    HomePageComponent,
    BenefitComponent,
    CarouselComponent,
    SlideComponent,
    SpeechComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
