import { Component, OnInit } from '@angular/core';
import { CpaStateService } from '../../services/cpa-state.service';

@Component({
  selector: 'app-minus-page',
  templateUrl: './minus-page.component.html',
  styleUrls: ['./minus-page.component.sass']
})
export class MinusPageComponent implements OnInit{
  private mainColor = 'red';
  private status = false;

  constructor( private cpaState: CpaStateService ) {}

  ngOnInit() {
    this.cpaState.status$.next(this.status);
  }
}
