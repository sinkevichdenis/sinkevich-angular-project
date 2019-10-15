import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { EnterFormComponent } from './components/enter-form/enter-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AuthContainerComponent,
    LoginComponent,
    RegistrationComponent,
    EnterFormComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    AuthContainerComponent
  ]
})
export class AuthModule { }
