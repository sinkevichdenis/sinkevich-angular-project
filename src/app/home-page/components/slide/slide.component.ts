import { Component, Input } from '@angular/core';
import { Slide } from '../../../core/models/slide.interface';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.sass']
})
export class SlideComponent {
  @Input() slideData: Slide;
}
