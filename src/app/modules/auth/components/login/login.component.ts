import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {User} from '../../../../models/user.interface';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private logForm: FormGroup;
  private users: User[];
  private isFormValid = true;

  constructor(private fb: FormBuilder, private auth: AuthService) {
   this.logForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get name(): AbstractControl {
    return this.logForm.get('name');
  }

  get password(): AbstractControl {
    return this.logForm.get('password');
  }

  validateUser( name = this.name.value, password = this.password.value ): void {
    const visitor = this.users.find(item => item.name === name);
    let streamNext = {
      user: null,
      status: false
    };

    if (visitor) {
      streamNext.user = (visitor.password === password) ? Object.assign({}, visitor) : null;
      streamNext.status = !!streamNext.user;
      AuthService.userOnline$.next(streamNext);
    }
    console.log('User Valid', streamNext.status);
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
