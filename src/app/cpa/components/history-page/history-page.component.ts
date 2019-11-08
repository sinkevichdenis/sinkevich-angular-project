import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { StateService } from '../../../core/services/state.service';
import { PaymentService } from '../../services/payment.service';
import { CategoryService } from '../../services/category.service';
import { DateRange } from '../../../core/models/date-range.interface';
import { CpaPayment } from '../../../core/models/cpa-payment.interface';
import { CpaCategory } from '../../../core/models/cpa-category.interface';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.sass']
})
export class HistoryPageComponent implements OnInit {
  private dateRange: DateRange;
  private payments$: null | Observable<CpaPayment[]>;
  private categories$: null | Observable<CpaCategory[]>;

  constructor(
    private paymentService: PaymentService,
    private categoryService: CategoryService,
    private state: StateService
  ) { }

  ngOnInit() {
    this.payments$ = null;
    this.categories$ = null;
    this.state.payDir$.next(null);
  }

  initGetData(data: DateRange): void {
    this.dateRange = Object.assign({}, data);
    this.getPayments(this.dateRange).subscribe(items => this.payments$ = of(items));
    this.categoryService.get().subscribe(items => this.categories$ = of(items));
  }

  getAllPayments(): Observable<CpaPayment[]> {
    return this.paymentService.get();
  }

  getPayments(dateRange: DateRange): Observable<CpaPayment[]> {
    return this.getAllPayments().pipe(
      map (items => items.filter(item => item.date >= dateRange.fromDate && item.date <= dateRange.toDate))
    );
  }

}
