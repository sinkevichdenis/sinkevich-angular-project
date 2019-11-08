import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeedbacksResolver } from './feedbacks.resolver';
import { FeedbacksPageComponent } from './feedbacks-page.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedbackService } from './services/feedback.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FeedbacksPageComponent,
    FeedbackFormComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: FeedbacksPageComponent,
      resolve: {
        feedbacks: FeedbacksResolver
      }
    }]),
  ],
  providers: [
    FeedbackService,
    FeedbacksResolver
  ]
})
export class FeedbacksPageModule {}
