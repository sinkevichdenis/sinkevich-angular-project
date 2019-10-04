import {Component, ViewEncapsulation} from '@angular/core';
import {Nav} from '../../../../models/nav.interface';

@Component({
  selector: 'app-cpa-container',
  templateUrl: './cpa-container.component.html',
  styleUrls: ['./cpa-container.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class CpaContainerComponent {
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
}
