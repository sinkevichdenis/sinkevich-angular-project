import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FeedbacksResolver } from './guards/feedbacks.resolver';
import { FeedbacksPageComponent } from './feedbacks-page.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedbackService } from './services/feedback.service';

const routes: Route[] = [{
  path: '',
  component: FeedbacksPageComponent,
  resolve: {
    feedbacks: FeedbacksResolver
  }
}];

@NgModule({
  declarations: [
    FeedbacksPageComponent,
    FeedbackFormComponent,
    FeedbackComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    FeedbackService,
    FeedbacksResolver
  ]
})
export class FeedbacksPageModule {}
