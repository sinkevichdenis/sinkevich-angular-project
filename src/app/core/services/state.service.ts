import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserOnline } from '../../models/userOnline.type';

@Injectable()
export class StateService {
  public payDir$: Subject<boolean>;
  public payDir: PayDir;

  public userOnline$: Subject<UserOnline>;
  public user: UserOnline;
  public userId: string | number | null;

  constructor() {
    this.payDir$ = new BehaviorSubject<boolean>(null);
    this.payDir$.subscribe(payDir => {
      this.payDir = payDir;
    });

    this.userOnline$ = new BehaviorSubject<UserOnline>( null);
    this.userOnline$.subscribe(item => {
      this.user = item;
      this.userId = this.user ? this.user.id : null;
    });
  }
}
