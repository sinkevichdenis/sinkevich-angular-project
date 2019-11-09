import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/internal/operators';
import { PaymentService } from '../services/payment.service';
import { CpaPayment } from '../../core/models/cpa-payment.interface';

@Injectable()
export class BalanceResolver implements Resolve<CpaPayment[]> {

  constructor(private paymentService: PaymentService) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<CpaPayment[]> | Promise<CpaPayment[]> | CpaPayment[] {
    return this.paymentService.get().pipe(
      take(1)
    );
  }
}
