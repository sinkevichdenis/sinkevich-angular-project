import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {Observable, of, Subscription} from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { CpaCategory } from '../../../../models/cpaCategory.interface';
import { StateService } from '../../../../core/services/state.service';
import { UserOnline } from '../../../../models/userOnline.type';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.sass']
})
export class CategoryFormComponent implements OnInit, AfterViewInit, OnDestroy {
  private payDir: PayDir;
  private user: UserOnline;
  private categories: CpaCategory[];
  private editableStatus = false;
  private input: HTMLElement;
  private subscrUser: Subscription;
  private subscrDir: Subscription;

  private catForm = this.fb.group({
    title: ['', Validators.required, this.checkTitle.bind(this)],
    newTitle: ['', Validators.required, this.checkTitle.bind(this)]
  });

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private state: StateService
  ) {}

  ngOnInit() {
    this.categoryService.get().subscribe(items => this.categories = [...items]);
    this.subscrUser = this.state.userOnline$.subscribe(item => this.user = item);
    this.subscrDir = this.state.payDir$.subscribe(item => this.payDir = item);
  }

  ngOnDestroy() {
    this.subscrUser.unsubscribe();
    this.subscrDir.unsubscribe();
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
    if (this.user) {
      this.categoryService.add({
        title: value,
        status: this.payDir,
        userId: this.user.id
      });
    }
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
