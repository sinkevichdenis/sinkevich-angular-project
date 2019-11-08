import {Component, Input, OnInit} from '@angular/core';
import {CpaPayment} from '../../../../models/cpaPayment.interface';
import {PaymentService} from '../../services/payment.service';

@Component({
  selector: 'app-history-element',
  templateUrl: './history-element.component.html',
  styleUrls: ['./history-element.component.sass']
})
export class HistoryElementComponent implements OnInit {
  @Input() payment: CpaPayment;
  private editable = false;

  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
  }

  agree(item: CpaPayment) {
    this.paymentService.delete(item);
  }

  cancel() {
    this.editable = false;
  }

  edit() {
    this.editable = true;
  }

  delete() {
    this.editable = true;
  }
}
