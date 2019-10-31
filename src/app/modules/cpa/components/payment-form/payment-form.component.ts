import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {Observable, Subscription} from 'rxjs';

import { CategoryService } from '../../services/category.service';
import { PaymentService } from '../../services/payment.service';
import { StateService } from '../../../../core/services/state.service';
import { CpaCategory } from '../../../../models/cpaCategory.interface';
import { CpaPayment } from '../../../../models/cpaPayment.interface';
import { UserOnline } from '../../../../models/userOnline.type';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.sass']
})
export class PaymentFormComponent implements OnInit, OnDestroy {
  @Input() public mainColor;
  readonly maxLength = 25;
  private categories: Observable<CpaCategory[]>;
  private user: UserOnline;
  private payDir: PayDir;
  private subscrUser: Subscription;
  private subscrDir: Subscription;

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
    private state: StateService
  ) {}

  ngOnInit() {
    this.categories = this.categoryService.get();
    this.subscrUser = this.state.userOnline$.subscribe(item => this.user = item);
    this.subscrDir = this.state.payDir$.subscribe(item => this.payDir = item);
  }

  ngOnDestroy() {
    this.subscrUser.unsubscribe();
    this.subscrDir.unsubscribe();
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

  onSubmit(): void {
    if (this.user) {
      this.paymentService.add(this.createPayment());
    }
    this.payForm.reset();
  }

 createPayment(): CpaPayment {
    return {
      date: new Date(this.date.value).getTime(),
      catId: this.category.value,
      userId: this.user.id,
      currency: 'BYN',
      value: this.value.value,
      status: this.payDir,
      text: this.text.value
    };
  }
}
