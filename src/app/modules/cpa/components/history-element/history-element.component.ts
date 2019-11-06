import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-element',
  templateUrl: './history-element.component.html',
  styleUrls: ['./history-element.component.sass']
})
export class HistoryElementComponent implements OnInit {
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
