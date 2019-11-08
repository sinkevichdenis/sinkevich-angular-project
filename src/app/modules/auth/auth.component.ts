import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../core/services/state.service';
import { UserOnline } from '../../core/models/user-online.type';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit, OnDestroy {
  private user: UserOnline;
  private subscrUser: Subscription;

  constructor(private router: Router, private state: StateService) {}

  ngOnInit() {
    this.subscrUser = this.state.userOnline$.subscribe(item => this.user = item);
  }

  ngOnDestroy() {
    this.subscrUser.unsubscribe();
  }

  exitUser() {
    this.state.userOnline$.next(null);
    this.router.navigate(['/account']);
  }

}
