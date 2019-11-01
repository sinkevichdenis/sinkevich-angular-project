import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

@NgModule({
  declarations: [
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularDateTimePickerModule
  ],
  exports: [
    AngularDateTimePickerModule,
    DatepickerComponent
  ]
})
export class SharedModule { }
