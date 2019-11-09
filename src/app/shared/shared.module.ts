import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MatExpansionModule } from '@angular/material/expansion'
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    DatepickerComponent,
    PaginatorComponent,
    AccordionComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularDateTimePickerModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule,
    ReactiveFormsModule,
    DatepickerComponent,
    PaginatorComponent,
    AccordionComponent,
    CalculatorComponent
  ]
})
export class SharedModule { }
