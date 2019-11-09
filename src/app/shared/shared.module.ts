import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MatExpansionModule } from '@angular/material/expansion'
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    PaginatorComponent,
    AccordionComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularDateTimePickerModule,
    MatPaginatorModule,
    MatExpansionModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    DatepickerComponent,
    PaginatorComponent,
    AccordionComponent,
    CalculatorComponent
  ]
})
export class SharedModule { }
