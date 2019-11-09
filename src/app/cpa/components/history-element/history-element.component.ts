import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/internal/operators';
import { StateService } from '../../../core/services/state.service';
import { PaymentService } from '../../services/payment.service';
import { CpaRoutingService } from '../../services/cpa-routing.service';
import { CpaPayment } from '../../../core/models/cpa-payment.interface';

@Component({
  selector: 'app-history-element',
  templateUrl: './history-element.component.html',
  styleUrls: ['./history-element.component.sass']
})
export class HistoryElementComponent {
  @Input() payment: CpaPayment;
  private delete$: Observable<CpaPayment> | null = null;
  private edit$: Observable<CpaPayment> | null = null;
  editable = false;

  constructor(
    private paymentService: PaymentService,
    private state: StateService,
    private router: CpaRoutingService
  ) { }

  agree(): void {
    this.editable = false;

    if ( this.delete$ ) {
      this.delete$.subscribe();
    }

    if ( this.edit$ ) {
      this.edit$.subscribe();
    }
  }

  cancel(): void {
    this.editable = false;

    if ( !this.delete$ ) {
      this.delete$ = null;
    }

    if ( !this.edit$ ) {
      this.edit$ = null;
    }
  }

  edit(item: CpaPayment): Observable<CpaPayment> {
    this.editable = true;
    return this.delete$ = of(item).pipe(
      tap((elem) => {
        this.changePage(elem);
        return this.state.editPayment$.next(elem);
      })
    );
  }

  delete(item: CpaPayment): Observable<CpaPayment> {
    this.editable = true;
    return this.delete$ = of(item).pipe(
      tap((elem) => this.paymentService.delete(elem))
    );
  }

  private changePage(item: CpaPayment): void {
    item.status ? this.router.goToPlusPage() : this.router.goToMinusPage();
  }
}
