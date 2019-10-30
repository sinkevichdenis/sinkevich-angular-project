import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';

import { CpaCategory } from '../../../../models/cpaCategory.interface';
import { CpaPayment } from '../../../../models/cpaPayment.interface';
import { PaymentService } from '../../services/payment.service';
import { CpaStateService } from '../../services/cpa-state.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.sass']
})
export class PaymentFormComponent implements OnInit {
  @Input() public mainColor;
  readonly maxLength = 25;
  private categories: Observable<CpaCategory[]>;
  private userId: string | number;
  private status: boolean;

  private payForm = this.fb.group({
    date: [new Date(), Validators.required],
    category: ['', Validators.required],
    value: ['', Validators.required],
    text: ['', Validators.maxLength(this.maxLength)]
  });

  public settings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false,
    closeOnSelect: true
  };


  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private paymentService: PaymentService,
    private cpaState: CpaStateService
  ) {}

  ngOnInit() {
    this.categories = this.categoryService.get();
    this.userId = this.cpaState.userId;
    this.cpaState.status$.subscribe(status => this.status = status);
  }

  get date(): AbstractControl {
    return this.payForm.get('date');
  }

  get category(): AbstractControl {
    return this.payForm.get('category');
  }

  get value(): AbstractControl {
    return this.payForm.get('value');
  }

  get text(): AbstractControl {
    return this.payForm.get('text');
  }

  onSubmit() {
    this.paymentService.add(this.createPayment());
    this.payForm.reset();
  }

 createPayment(): CpaPayment {
    return {
      date: new Date(this.date.value).getTime(),
      catId: this.category.value,
      userId: this.userId,
      currency: 'BYN',
      value: this.value.value,
      status: this.status,
      text: this.text.value
    };
  }
}
