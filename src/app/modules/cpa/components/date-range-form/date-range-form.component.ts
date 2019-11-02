import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-date-range-form',
  templateUrl: './date-range-form.component.html',
  styleUrls: ['./date-range-form.component.sass']
})
export class DateRangeFormComponent implements OnInit {

  public rangeForm = this.fb.group({
    fromDate: [new Date(), Validators.required],
    toDate: [new Date(), Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  get fromDate(): AbstractControl {
    return this.rangeForm.get('fromDate');
  }

  get toDate(): AbstractControl {
    return this.rangeForm.get('toDate');
  }

  onSubmit() {

  }

}
