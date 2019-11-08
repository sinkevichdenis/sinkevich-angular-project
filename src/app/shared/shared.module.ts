import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MatExpansionModule } from '@angular/material/expansion'
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    PaginatorComponent,
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularDateTimePickerModule,
    MatPaginatorModule,
    MatExpansionModule
  ],
  exports: [
    DatepickerComponent,
    PaginatorComponent,
    AccordionComponent,
  ]
})
export class SharedModule { }
