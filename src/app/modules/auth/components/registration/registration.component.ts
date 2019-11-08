import { Component} from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { StateService } from '../../../../core/services/state.service';
import { User } from '../../../../core/models/user.interface';
import { find, map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  private emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  private regForm = this.fb.group({
    name: ['', Validators.required, [this.checkName.bind(this)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailRegEx)]]
  });

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    public state: StateService
  ) {}

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

  checkName(control: AbstractControl) {
    return this.auth.getSelectedValues('name').pipe(
      find(items => items.find(item => item === control.value)),
      map(response => !!response ? { notUnique: true } : null)
    );
  }

  onSubmit(): void {
    const newUser = {
      name: this.name.value,
      password: this.password.value,
      email: this.email.value,
      date: Date.now()
    };
    this.postNewUser(newUser);
    this.addToStream(newUser);
  }

  postNewUser(data: User): void {
    this.auth.addUsers(data);
  }

  addToStream(user): void {
    this.auth.getUserWithId(user.name).subscribe(item => {
      user = Object.assign({}, item);
    });
    this.state.userOnline$.next(user);
  }
}
