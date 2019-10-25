import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../../data/firebase.service';
import { CpaPayment } from '../../../models/cpaPayment.interface';
import { map } from 'rxjs/internal/operators';
import { CpaStateService } from './cpa-state.service';

@Injectable()
export class PaymentService {
  private dbKey = 'payments';
  private userId: string | number | null;
  private status: boolean;

  constructor(private fb: FirebaseService, private cpaState: CpaStateService) {
    this.userId = this.cpaState.userId;
    this.cpaState.status$.subscribe(status => this.status = status);
  }

  get(): Observable<CpaPayment[]> {
    return this.fb.getItems<CpaPayment>(this.dbKey).pipe(
      map(items => items.filter(item => item.userId === this.userId)),
      map(items => items.sort((a, b) => a.date - b.date))
    );
  }

  getSelectedValues(key: string): Observable<any[]> {
    return this.fb.getSelectedValues<CpaPayment>(this.dbKey, key);
  }

  add(item: CpaPayment): void {
    this.fb.addItem(this.dbKey, item);
  }

  update(item: CpaPayment) {
    this.fb.updateItem(this.dbKey, item);
  }

  delete(item: CpaPayment) {
    this.fb.deleteItem(this.dbKey, item);
  }

}
