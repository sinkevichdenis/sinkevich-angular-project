import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserOnline } from '../models/user-online.type';
import { Feedback } from '../models/feedback.interface';
import { CpaPayment } from '../models/cpa-payment.interface';

@Injectable()
export class StateService {
  public payDir$ = new BehaviorSubject<boolean>(null);
  public userOnline$ = new BehaviorSubject<UserOnline>( null);
  public feedbacks$ = new BehaviorSubject<Feedback[]>( null);
  public editPayment$ = new BehaviorSubject<CpaPayment>(null);
}
