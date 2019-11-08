import {Component, Input, OnInit} from '@angular/core';
import {CpaPayment} from '../../../../models/cpaPayment.interface';

@Component({
  selector: 'app-history-element',
  templateUrl: './history-element.component.html',
  styleUrls: ['./history-element.component.sass']
})
export class HistoryElementComponent implements OnInit {
  @Input() payment: CpaPayment;
  private editable = false;

  constructor() { }

  ngOnInit() {
  }

  agree() {

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
