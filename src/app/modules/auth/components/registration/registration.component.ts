import { Component} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../../models/user.interface';
import {find, map, tap} from 'rxjs/internal/operators';
import {UserOnline} from '../../../../models/userOnline.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent  {
  private regForm: FormGroup;
  private emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  private users: User[];

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.regForm = fb.group({
      name: ['', Validators.required, this.checkName.bind(this)],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailRegEx)]]
    });
  }

  get name(): AbstractControl {
    return this.regForm.get('name');
  }

  get password(): AbstractControl {
    return this.regForm.get('password');
  }

  get confirmPassword(): AbstractControl {
    return this.regForm.get('confirmPassword');
  }

  get email(): AbstractControl {
    return this.regForm.get('email');
  }

  onSubmit(): void {
    const streamNext = {
      user: null,
      status: false
    };
    streamNext.user = {
      name: this.name.value,
      password: this.password.value,
      email: this.email.value,
      date: Date.now()
    };
    streamNext.status = !!streamNext.user;
    AuthService.userOnline$.next(streamNext);

    this.postNewUser(streamNext.user);
  }

  checkName(control: AbstractControl) {
    return this.auth.getSelectedValues('name').pipe(
      find(items => items.find(item => item === control.value)),
      map(response => !!response ? { notUnique: true } : null)
    );
  }

  postNewUser(data: User): void {
    console.log('data', data);
    this.auth.addUsers(data);
  }
}
