import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  logForm = this.fb.group({
    name: ['', Validators.required],
    password: ['']
  });

  constructor(private fb: FormBuilder) {}

}
