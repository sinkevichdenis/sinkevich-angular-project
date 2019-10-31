import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { FirebaseService } from '../../../core/services/firebase.service';
import { StateService } from '../../../core/services/state.service';
import { CpaPayment } from '../../../models/cpaPayment.interface';
import { UserOnline } from '../../../models/userOnline.type';

@Injectable()
export class PaymentService {
  private dbKey = 'payments';
  private user: UserOnline;
  private payDir: PayDir;

  constructor(private fb: FirebaseService, private state: StateService) {
    this.state.userOnline$.subscribe(item => this.user = item);
    this.state.payDir$.subscribe(item => this.payDir = item);
  }

  get(): Observable<CpaPayment[]> {
    return this.fb.getItems<CpaPayment>(this.dbKey).pipe(
      map(items => items.filter(item => item.userId === ((this.user.id) ? this.user.id : null))),
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
