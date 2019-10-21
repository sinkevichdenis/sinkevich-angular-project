import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.sass']
})
export class PaymentFormComponent {
  private payForm: FormGroup;
  date: Date = new Date();
  public settings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false,
    closeOnSelect: true
  };

  constructor(private fb: FormBuilder) {
    this.payForm = fb.group({
      date: [new Date()],
      category: [''],
      value: ['', Validators.required],
      text: ['']
    });
  }

  onSubmit(): void {

  }
}
