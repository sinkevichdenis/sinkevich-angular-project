import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Nav } from '../../models/nav.interface';
import { AuthService } from '../auth/services/auth.service';
import { UserOnline } from '../../models/userOnline.interface';
import { CpaRoutingService } from './services/cpa-routing.service';

@Component({
  selector: 'app-cpa',
  templateUrl: './cpa.component.html',
  styleUrls: ['./cpa.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class CpaComponent {
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

  private userOnline: UserOnline;

  constructor(private router: Router, private cpaRouting: CpaRoutingService) {
    AuthService.userOnline$.subscribe(item => {
      this.userOnline = item;
      if (item.status) {
        this.cpaRouting.navigateVisitor();
      }
    });
  }
}
