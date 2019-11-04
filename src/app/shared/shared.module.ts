import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularDateTimePickerModule,
    MatPaginatorModule
  ],
  exports: [
    DatepickerComponent,
    PaginatorComponent
  ]
})
export class SharedModule { }
