import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../../core/services/state.service';

@Component({
  selector: 'app-plus-page',
  templateUrl: './plus-page.component.html'
})
export class PlusPageComponent implements OnInit {
  public mainColor = 'green';
  public status = true;

  constructor( private state: StateService ) {}

  ngOnInit() {
    this.state.payDir$.next(this.status);
  }
}
