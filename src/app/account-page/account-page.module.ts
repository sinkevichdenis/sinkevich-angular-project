import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpaModule } from '../cpa/cpa.module';
import { AuthModule } from '../auth/auth.module';
import { MatTabsModule } from '@angular/material/tabs';

import { AccountPageComponent } from './account-page.component';

@NgModule({
  declarations: [
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    CpaModule,
    MatTabsModule,
    AuthModule
  ]
})
export class AccountPageModule { }
