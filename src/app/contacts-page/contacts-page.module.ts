import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactsPageComponent } from './contacts-page.component';

const routes: Route[] = [{
  path: '',
  component: ContactsPageComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [
    ContactsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactsPageModule { }
