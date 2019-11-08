import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';
import { UserOnline } from '../../../../core/models/user-online.type';
import { Feedback } from '../../../../core/models/feedback.interface';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.sass']
})
export class FeedbackFormComponent {
  @Input() user: UserOnline;
  readonly maxLength = 1000;

  private feedForm = this.fb.group({
    text: [null, [Validators.required, Validators.maxLength(this.maxLength)]]
  });

  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackService
  ) { }

  get text(): AbstractControl {
    return this.feedForm.get('text');
  }

  clear(): void {
    this.feedForm.reset();
  }

  createPostData(): Feedback {
    return {
      text: this.text.value.trim(),
      name: this.user.name,
      date: Date.now(),
      city: '',
      stars: 0
    };
  }

  submit(): void {
    this.feedbackService.add(this.createPostData());
    this.clear();
  }
}
