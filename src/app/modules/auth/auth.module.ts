import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { AuthComponent } from './auth.component';
import { EnterFormComponent } from './components/enter-form/enter-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    EnterFormComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
