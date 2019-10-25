import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../../models/user.interface';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class CpaStateService {
  private user: User;
  public userId: string | number;
  public status$: Subject<boolean>;
  public status: boolean | null;

  constructor() {
    AuthService.userOnline$.subscribe(item => {
      this.user = Object.assign({}, item.user);
      this.userId = this.user ? this.user.id : null;
    });

    this.status$ = new BehaviorSubject<boolean>(null);
    this.status$.subscribe(status => this.status = status);
  }
}
