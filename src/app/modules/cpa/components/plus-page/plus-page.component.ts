import { Component, OnInit } from '@angular/core';
import { CpaStateService } from '../../services/cpa-state.service';

@Component({
  selector: 'app-plus-page',
  templateUrl: './plus-page.component.html',
  styleUrls: ['./plus-page.component.sass']
})
export class PlusPageComponent implements OnInit{
  private mainColor = 'green';
  private status = true;

  constructor( private cpaState: CpaStateService ) {}

  ngOnInit() {
    this.cpaState.status$.next(this.status);
  }
}
