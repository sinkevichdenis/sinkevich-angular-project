import { Component, Input } from '@angular/core';
import { Feedback } from '../../../../models/feedback.interface';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.sass']
})
export class SpeechComponent {
  @Input() speechData: Feedback;
  @Input() invert: boolean;
}
