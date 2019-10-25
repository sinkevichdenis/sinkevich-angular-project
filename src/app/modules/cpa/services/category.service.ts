import { Injectable } from '@angular/core';
import { FirebaseService } from '../../../data/firebase.service';
import { Observable } from 'rxjs';
import { CpaCategory } from '../../../models/cpaCategory.interface';
import { map } from 'rxjs/internal/operators';
import { CpaStateService } from './cpa-state.service';

@Injectable()
export class CategoryService {
  private dbKey = 'categories';
  private userId: string | number | null;
  private status: boolean;

  constructor(private fb: FirebaseService, private cpaState: CpaStateService) {
    this.userId = this.cpaState.userId;
    this.cpaState.status$.subscribe(status => this.status = status);
  }

  get(): Observable<CpaCategory[]> {
    return this.fb.getItems<CpaCategory>(this.dbKey).pipe(
      map(items => items.filter(item => item.userId === this.userId && item.status === this.status)),
      map(items => items.sort((a, b) => a.title.localeCompare(b.title)))
    );
  }

  getSelectedValues(key: string): Observable<any[]> {
    return this.fb.getSelectedValues<CpaCategory>(this.dbKey, key);
  }

  add(item: CpaCategory): void {
    this.fb.addItem(this.dbKey, item);
  }

  update(item: CpaCategory) {
    this.fb.updateItem(this.dbKey, item);
  }

  delete(item: CpaCategory) {
    this.fb.deleteItem(this.dbKey, item);
  }

  getWithId(keyValue: string): Observable<CpaCategory> {
    return this.get().pipe(
      map(items => items.find(item => item.title === keyValue)),
    );
  }
}
