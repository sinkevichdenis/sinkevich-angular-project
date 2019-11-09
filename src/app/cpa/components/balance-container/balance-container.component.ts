import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { DateOptionsService } from '../../../core/services/date-options.service';
import { CpaPayment } from '../../../core/models/cpa-payment.interface';

@Component({
  selector: 'app-balance-container',
  templateUrl: './balance-container.component.html',
  styleUrls: ['./balance-container.component.sass']
})
export class BalanceContainerComponent {
  @Input() payments$: Observable<CpaPayment[]>;
  readonly currDate = new Date();
  readonly startOfDay = DateOptionsService.getStartOfDate(this.currDate);
  readonly startOfWeek = DateOptionsService.getStartOfDate(DateOptionsService.getFirstDayOfWeek(this.currDate));
  readonly startOfMonth = DateOptionsService.getStartOfDate(DateOptionsService.getFirstDayOfMonth(this.currDate));

  constructor(
    private dateOptions: DateOptionsService
  ) {}

  filterPayments(firstDate: number): Observable<CpaPayment[]> {
    return this.payments$.pipe(
      map( items => items.filter(item => item.date >= firstDate && item.date <= Date.now()))
    );
  }

  reducePayments(firstDate: number): Observable<number> {
    return this.filterPayments(firstDate).pipe(
      map( items => items.reduce( (acc, curr) => acc + curr.value, 0))
    );
  }
}
