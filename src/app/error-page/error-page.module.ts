import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ErrorPageComponent } from './error-page.component';

const routes: Route[] = [{
  path: '',
  component: ErrorPageComponent
}];

@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ErrorPageModule { }
