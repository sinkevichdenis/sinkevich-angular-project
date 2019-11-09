import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CpaModule } from '../cpa/cpa.module';
import { AuthModule } from '../auth/auth.module';
import { AccountPageComponent } from './account-page.component';

@NgModule({
  declarations: [
    AccountPageComponent
  ],
  imports: [
    SharedModule,
    CpaModule,
    AuthModule
  ]
})
export class AccountPageModule { }
