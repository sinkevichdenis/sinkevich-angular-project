import { Injectable } from '@angular/core';
import {CanLoad, CanActivate, CanActivateChild, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthGuard implements CanLoad, CanActivateChild {
  private isUserOnline = false;

  constructor(private auth: AuthService, private router: Router) {
    AuthService.userOnline$.subscribe(item => {
      this.isUserOnline = !!item.user;
    });
  }

  canLoad() {
    return true;
  }

  canActivateChild() {
    if (!this.isUserOnline) {
      this.router.navigate(['/account']);
    }
    return this.isUserOnline;
  }
}
