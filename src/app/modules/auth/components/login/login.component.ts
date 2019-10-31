import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../../models/user.interface';
import { StateService } from '../../../../core/services/state.service';
import { AuthService } from '../../services/auth.service';

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

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    public state: StateService
  ) {}

  get name(): AbstractControl {
    return this.logForm.get('name');
  }

  get password(): AbstractControl {
    return this.logForm.get('password');
  }

  validateUser( name = this.name.value, password = this.password.value ): void {
    const visitor = this.users.find(item => item.name === name);
    console.log('visitor', visitor);
    let streamNext = null;

    if (visitor) {
      streamNext = (visitor.password === password) ? Object.assign({}, visitor) : null;
      console.log('enter', JSON.stringify(streamNext));
      this.state.userOnline$.next(streamNext);
    }

    if (!streamNext) {
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
