import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CpaRoutingService } from './services/cpa-routing.service';
import { StateService } from '../core/services/state.service';
import { Nav } from '../core/models/nav.interface';
import { UserOnline } from '../core/models/user-online.type';

@Component({
  selector: 'app-cpa',
  templateUrl: './cpa.component.html',
  styleUrls: ['./cpa.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class CpaComponent implements  OnInit, OnDestroy {
  links: Nav[] = [
    {
      path: 'balance',
      name: 'Баланс',
      exact: true
    },
    {
      path: 'plus',
      name: 'Доходы',
      exact: true
    },
    {
      path: 'minus',
      name: 'Расходы',
      exact: true
    },
    {
      path: 'history',
      name: 'История',
      exact: true
    }
  ];

  private subscrUser: Subscription;
  user: UserOnline;

  constructor(
    private router: Router,
    private cpaRouting: CpaRoutingService,
    private state: StateService
  ) {}

  ngOnInit() {
    this.subscrUser = this.state.userOnline$.subscribe(item => {
      this.user = item;
      if (item) {
        this.cpaRouting.navigateVisitor();
      }
    });
  }

  ngOnDestroy() {
    this.subscrUser.unsubscribe();
  }
}
