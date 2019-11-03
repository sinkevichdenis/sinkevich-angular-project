import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StateService } from '../../core/services/state.service';
import { FeedbackService } from './services/feedback.service';
import { Feedback } from '../../models/feedback.interface';
import { UserOnline } from '../../models/userOnline.type';

@Component({
  selector: 'app-feedbacks-page',
  templateUrl: './feedbacks-page.component.html',
  styleUrls: ['./feedbacks-page.component.sass']
})
export class FeedbacksPageComponent implements OnInit, OnDestroy {
  private subscrUser: Subscription;
  private feedbacks: Observable<Feedback[]>;
  private user: UserOnline;

  constructor(
    private state: StateService,
    private feedbackService: FeedbackService
  ) { }

  ngOnInit() {
    this.feedbacks = this.feedbackService.get();
    this.subscrUser = this.state.userOnline$.subscribe(item => this.user = item);
  }

  ngOnDestroy() {
    this.subscrUser.unsubscribe();
  }

}
