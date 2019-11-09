import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import {map, tap} from 'rxjs/internal/operators';
import { ActivatedRoute } from '@angular/router';
import { CpaRoutingService } from '../../services/cpa-routing.service';
import { CpaPayment } from '../../../core/models/cpa-payment.interface';

@Component({
  selector: 'app-balance-page',
  templateUrl: './balance-page.component.html',
  styleUrls: ['./balance-page.component.sass']
})
export class BalancePageComponent {
  private payments$: Observable<CpaPayment[]>;

  constructor(
    private router: CpaRoutingService,
    private activatedRoute: ActivatedRoute
  ) {
    this.payments$ = this.activatedRoute.data.pipe(
      map(items => items.payments)
    );
  }

  filterPayments(status: boolean): Observable<CpaPayment[]> {
    return this.payments$.pipe(
      map( items => items.filter(item => item.status === status))
    );
  }

  reducePayments(status: boolean): Observable<number> {
    return this.filterPayments(status).pipe(
      map( items => items.reduce( (acc, curr) => acc + curr.value, 0))
    );
  }

  countTotalBalance() {
    return combineLatest(
      this.reducePayments(true),
      this.reducePayments(false).pipe(
        map(items => -items)
      ),
      ( a, b ) => a + b
    );
  }

  goToPage(status: boolean): void {
    status ? this.router.goToPlusPage() : this.router.goToMinusPage();
  }
}
