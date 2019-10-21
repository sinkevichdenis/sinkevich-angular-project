import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minus-page',
  templateUrl: './minus-page.component.html',
  styleUrls: ['./minus-page.component.sass']
})
export class MinusPageComponent implements OnInit {
  private mainColor = 'red';
  private status = false;

  constructor() { }

  ngOnInit() {
  }

}
