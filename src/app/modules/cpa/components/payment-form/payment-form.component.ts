import {Component, Input, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import {ObservableInput} from 'rxjs';
import {CpaCategory} from '../../../../models/cpaCategory.interface';
import {tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.sass']
})
export class PaymentFormComponent implements OnInit {
  @Input() public status;
  @Input() public mainColor;

  private payForm = this.fb.group({
    date: [new Date(), Validators.required],
    category: ['', Validators.required],
    value: ['', Validators.required],
    text: ['']
  });

  public settings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false,
    closeOnSelect: true
  };

  private categories: ObservableInput<CpaCategory[]>;

  constructor(private fb: FormBuilder, private categoryService: CategoryService) {}

  ngOnInit() {
    this.categories = this.categoryService.get();
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

  onSubmit(): void {
  }
}
