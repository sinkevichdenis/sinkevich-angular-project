import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbacksPageComponent } from './feedbacks-page.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

@NgModule({
  declarations: [
    FeedbacksPageComponent,
    FeedbackFormComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FeedbacksPageModule {}
