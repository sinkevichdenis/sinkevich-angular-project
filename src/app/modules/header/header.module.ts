import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './header.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { AppRoutingModule } from '../routing/app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    NavButtonComponent
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
