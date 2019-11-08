import { Component, OnInit } from '@angular/core';
import { CpaRoutingService } from '../../services/cpa-routing.service';

@Component({
  selector: 'app-balance-page',
  templateUrl: './balance-page.component.html',
  styleUrls: ['./balance-page.component.sass']
})
export class BalancePageComponent implements OnInit {
  private paymentStatus: boolean;

  constructor(
    private router: CpaRoutingService
  ) { }

  ngOnInit() {
  }

  goToPage(status: boolean): void {
    status ? this.router.goToPlusPage() : this.router.goToMinusPage();
  }
}
