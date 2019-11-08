import { Component, Input } from '@angular/core';
import { Benefit } from '../../../core/models/benefit.interface';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.sass']
})
export class BenefitComponent {
  @Input() benefitData: Benefit;
}
