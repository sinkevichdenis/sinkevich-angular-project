import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus-page',
  templateUrl: './plus-page.component.html',
  styleUrls: ['./plus-page.component.sass']
})
export class PlusPageComponent implements OnInit {
  private mainColor = 'green';
  private status = true;

  constructor() { }

  ngOnInit() {
  }

}
