import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../core/services/state.service';

@Component({
  selector: 'app-minus-page',
  templateUrl: './minus-page.component.html'
})
export class MinusPageComponent implements OnInit {
  public mainColor = 'red';
  public status = false;

  constructor( private state: StateService ) {}

  ngOnInit() {
    this.state.payDir$.next(this.status);
  }
}
