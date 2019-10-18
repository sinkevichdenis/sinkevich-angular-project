import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Nav } from '../../models/nav.interface';
import { AuthService } from '../auth/services/auth.service';
import { UserOnline } from '../../models/userOnline.interface';

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

  constructor(private router: Router) {
    AuthService.userOnline$.subscribe(item => {
      this.userOnline = item;
      if (item.status) {
        this.router.navigate(['/account/balance']);
      }
    });
  }
}
