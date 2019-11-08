import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { CategoryService } from '../../services/category.service';
import { PaymentService } from '../../services/payment.service';
import { StateService } from '../../../../core/services/state.service';
import { CpaCategory } from '../../../../core/models/cpa-category.interface';
import { CpaPayment } from '../../../../core/models/cpa-payment.interface';
import { UserOnline } from '../../../../core/models/user-online.type';

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
  private editPaymentItem: CpaPayment | null;
  private subscrUser: Subscription;
  private subscrDir: Subscription;
  private subscrEdit: Subscription;

  private payForm = this.fb.group({
    date: [new Date(), Validators.required],
    category: ['', Validators.required],
    value: ['', Validators.required],
    text: ['', Validators.maxLength(this.maxLength)]
  });

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
    this.subscrEdit = this.state.editPayment$.subscribe(item => {
      this.editPaymentItem = item;
      if (this.editPaymentItem) {
        this.fillForm();
      }
    });
  }

  ngOnDestroy() {
    this.subscrUser.unsubscribe();
    this.subscrDir.unsubscribe();
    this.subscrEdit.unsubscribe();
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
    if (this.user && !this.editPaymentItem) {
      this.paymentService.add(this.createPayment());
    }
    if (this.editPaymentItem) {
      const payment = this.editPayment(this.editPaymentItem);
      this.paymentService.update(payment);
    }
    this.resetForm();
  }

  editPayment(prevItem: CpaPayment): CpaPayment {
    const payment = this.createPayment();
    payment.id = prevItem.id;
    payment.date = Date.now();
    return payment;
  }

  createPayment(): CpaPayment {
    return {
      date: new Date(this.date.value).getTime(),
      catId: this.category.value,
      userId: this.user.id,
      currency: 'BYN',
      value: +this.value.value.toString().trim(),
      status: this.payDir,
      text: this.text.value.toString().trim()
    };
  }

  resetForm(): void {
    this.payForm.reset();
    this.payForm.patchValue({date: new Date()});
  }

  fillForm(): void {
    this.payForm.patchValue(this.editPaymentItem);

    this.categories.subscribe( items => {
      const catTitle = items.find(item => item.id === this.editPaymentItem.catId).id;
      this.category.patchValue(catTitle);
    });
  }
}
