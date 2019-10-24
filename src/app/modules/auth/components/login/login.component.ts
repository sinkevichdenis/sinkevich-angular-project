import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {User} from '../../../../models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private users: User[];
  private isFormValid = true;

  private logForm = this.fb.group({
    name: ['admin', Validators.required],
    password: ['111111', Validators.required]
  });

  constructor(private fb: FormBuilder, public auth: AuthService) {}

  get name(): AbstractControl {
    return this.logForm.get('name');
  }

  get password(): AbstractControl {
    return this.logForm.get('password');
  }

  validateUser( name = this.name.value, password = this.password.value ): void {
    const visitor = this.users.find(item => item.name === name);
    console.log('visitor', visitor);
    const streamNext = {
      user: null,
      status: false
    };

    if (visitor) {
      streamNext.user = (visitor.password === password) ? Object.assign({}, visitor) : null;
      streamNext.status = !!streamNext.user;
      console.log('enter', JSON.stringify(streamNext));
      AuthService.userOnline$.next(streamNext);
    }

    if (!streamNext.status) {
      this.isFormValid = false;
      setTimeout(() => this.isFormValid = true, 3000);
    }
  }

  onSubmit(): void {
    this.auth.getUsers().subscribe( items => {
      this.users = items;
      this.validateUser();
    });
  }
}
