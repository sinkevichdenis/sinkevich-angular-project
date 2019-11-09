import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ErrorPageComponent } from './error-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class ErrorPageModule { }
