import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.sass']
})
export class AccountPageComponent implements OnInit {

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

}
