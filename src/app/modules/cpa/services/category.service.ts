import { Injectable } from '@angular/core';
import { FirebaseService } from '../../../data/firebase.service';
import { Observable } from 'rxjs';
import { CpaCategory } from '../../../models/cpaCategory.interface';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private dbKey = 'categories';
  public id: string | number;
  public status: boolean;

  constructor(private fb: FirebaseService) {}

  get(): Observable<CpaCategory[]> {
    return this.fb.getItems<CpaCategory>(this.dbKey).pipe(
      map(items => items.filter(item => item.userId === this.id && item.status === this.status)),
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
