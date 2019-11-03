import {Component, Input, OnInit} from '@angular/core';
import {Feedback} from '../../../../models/feedback.interface';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})
export class FeedbackComponent implements OnInit {
  @Input() feedback: Feedback;
  @Input() invert: boolean;

  constructor() { }

  ngOnInit() {
  }

}
