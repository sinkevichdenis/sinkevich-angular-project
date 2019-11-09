import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { AuthComponent } from './auth.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    SharedModule,
    MatTabsModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
