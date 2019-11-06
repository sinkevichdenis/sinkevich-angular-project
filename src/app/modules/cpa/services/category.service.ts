import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/internal/operators';
import { FirebaseService } from '../../../core/services/firebase.service';
import { StateService } from '../../../core/services/state.service';
import { CpaCategory } from '../../../models/cpaCategory.interface';
import { UserOnline } from '../../../models/userOnline.type';

@Injectable()
export class CategoryService {
  private dbKey = 'categories';
  private user: UserOnline;
  private payDir: PayDir;

  constructor(private fb: FirebaseService, private state: StateService) {
    this.state.userOnline$.subscribe(item => this.user = item);
    this.state.payDir$.subscribe(item => this.payDir = item);
  }

  get(): Observable<CpaCategory[]> {
    return this.fb.getItems<CpaCategory>(this.dbKey).pipe(
      map(items => items.filter(item =>
        item.userId === ((!!this.user) ? this.user.id : null)
        && item.status === this.payDir)),
      tap(items => console.log('localeCompare', items)),
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
