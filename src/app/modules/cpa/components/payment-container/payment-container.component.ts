import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-container',
  templateUrl: './payment-container.component.html',
  styleUrls: ['./payment-container.component.sass']
})
export class PaymentContainerComponent {
  @Input() mainColor;
  @Input() status;
}
