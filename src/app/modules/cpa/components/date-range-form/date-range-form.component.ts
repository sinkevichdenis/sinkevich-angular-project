import {Component, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {DateRange} from '../../../../models/dateRange.interface';

@Component({
  selector: 'app-date-range-form',
  templateUrl: './date-range-form.component.html',
  styleUrls: ['./date-range-form.component.sass']
})
export class DateRangeFormComponent {
  @Output() dateRange: EventEmitter<DateRange> = new EventEmitter();

  public rangeForm = this.fb.group({
    fromDate: [new Date(), Validators.required],
    toDate: [new Date(), Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  get fromDate(): AbstractControl {
    return this.rangeForm.get('fromDate');
  }

  get toDate(): AbstractControl {
    return this.rangeForm.get('toDate');
  }

  private getStartDay(date: string): number {
    return new Date(date).setHours(0, 0, 0, 0);
  }

  private getEndDay(date: string): number {
    return new Date(date).setHours(23, 59, 59, 999);
  }

  createPostData(): DateRange {
    return {
      fromDate: this.getStartDay(this.fromDate.value),
      toDate: this.getEndDay(this.toDate.value),
    };
  }

  postDateRange(): void {
    this.dateRange.emit(this.createPostData());
  }
}
