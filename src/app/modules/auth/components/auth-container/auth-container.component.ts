import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.sass']
})
export class AuthContainerComponent implements OnInit {

  private authStatus = true;

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

}
