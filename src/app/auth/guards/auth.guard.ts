import { Injectable } from '@angular/core';
import { CanLoad, CanActivateChild, Router } from '@angular/router';
import { StateService } from '../../core/services/state.service';


@Injectable()
export class AuthGuard implements CanLoad, CanActivateChild {
  private isUserOnline = false;

  constructor(private state: StateService, private router: Router) {
    this.state.userOnline$.subscribe(item => this.isUserOnline = !!item);
  }

  canLoad(): boolean {
    return true;
  }

  canActivateChild(): boolean {
    if (!this.isUserOnline) {
      this.router.navigate(['/account']);
    }
    return this.isUserOnline;
  }
}
