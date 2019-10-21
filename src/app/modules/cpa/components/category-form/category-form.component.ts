import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.sass']
})
export class CategoryFormComponent{
  private catForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.catForm = fb.group({
      title: [''],
    });
  }

  onSubmit(): void {

  }
}
