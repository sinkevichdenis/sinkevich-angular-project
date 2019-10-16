import { Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent  {

  regForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.regForm = fb.group({
      name: ['11'],
      password: [''],
      passwordRepeat: [''],
      email: ['222']
    });
  }
}
