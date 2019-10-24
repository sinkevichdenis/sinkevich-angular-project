import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../../models/user.interface';
import {from, Observable, of} from 'rxjs';
import {CpaCategory} from '../../../../models/cpaCategory.interface';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.sass']
})
export class CategoryFormComponent implements OnInit, AfterViewInit {
  @Input() status;
  private user: User;
  private categories: CpaCategory[];
  private editableStatus = false;
  private input: HTMLElement;

  private catForm = this.fb.group({
    title: ['', Validators.required, this.checkTitle.bind(this)],
    newTitle: ['', Validators.required, this.checkTitle.bind(this)]
  });

  constructor(private fb: FormBuilder, private categoryService: CategoryService) {}

  ngOnInit() {
    AuthService.userOnline$.subscribe(item => {
      this.user = Object.assign({}, item.user);
    });
    this.categoryService.id = this.user.id;
    this.categoryService.status = this.status;
    this.categoryService.get().subscribe(items => this.categories = [...items]);
  }

  ngAfterViewInit() {
    this.input = document.getElementById('categoryTitleInput');
  }

  get title(): AbstractControl {
    return this.catForm.get('title');
  }

  get newTitle(): AbstractControl {
    return this.catForm.get('newTitle');
  }

  checkTitle(control: AbstractControl): Observable<{[key: string]: boolean} | null > {
    return of(this.findCategory(control.value) ? {notUnique: true} : null);
  }

  findCategory(title: string): CpaCategory | null {
    const result = this.categories.find(item => item.title.toLowerCase() === title.trim().toLowerCase());
    return result ? result : null;
  }

  add(value: string): void {
    this.categoryService.add({
      title: value,
      status: this.status,
      userId: this.user.id
    });
    this.clear();
  }

  edit(oldValue: string, newValue: string): void {
    const result = this.findCategory(oldValue);
    if (result) {
      result.title = newValue;
      this.categoryService.update(result);
    }
    this.clear();
    this.switchMenu();
  }

  delete(value: string): void {
    const result = this.findCategory(value);
    if (result) {
      this.categoryService.delete(result);
    }
    this.clear();
  }

  clear(): void {
    this.catForm.reset();
  }

  switchMenu(): void {
    this.editableStatus = !this.editableStatus;
    this.editableStatus ? this.input.setAttribute('disabled', 'true') : this.input.removeAttribute('disabled');
  }
}
