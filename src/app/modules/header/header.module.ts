import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AppRoutingModule } from '../routing/app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    RouterModule
  ]
})
export class HeaderModule { }
