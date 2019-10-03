import {Component, Input} from '@angular/core';

export interface Nav {
  path: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-cpa-container',
  templateUrl: './cpa-container.component.html',
  styleUrls: ['./cpa-container.component.sass']
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
      name: 'История платежей',
      exact: true
    }
  ];
}
