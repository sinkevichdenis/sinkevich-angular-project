import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MatExpansionModule } from '@angular/material/expansion'
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularDateTimePickerModule,
    MatExpansionModule
  ],
  exports: [
    AngularDateTimePickerModule,
    DatepickerComponent,
    AccordionComponent
  ]
})
export class SharedModule { }
