import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {StateService} from '../../../../core/services/state.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.sass']
})
export class FeedbackFormComponent {
  private maxLength = 10;

  private feedForm = this.fb.group({
    text: ['', [Validators.required, Validators.maxLength(this.maxLength)]]
  });

  constructor(
    private fb: FormBuilder,
    private stateService: StateService
  ) { }

  get text(): AbstractControl {
    return this.feedForm.get('text');
  }

  clear(): void {
    this.feedForm.reset();
  }

  submit(): void {

  }

}
