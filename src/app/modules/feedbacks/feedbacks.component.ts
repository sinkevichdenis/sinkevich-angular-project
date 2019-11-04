import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';
import { StateService } from '../../core/services/state.service';
import { FeedbackService } from './services/feedback.service';
import { Feedback } from '../../models/feedback.interface';
import { UserOnline } from '../../models/userOnline.type';

@Component({
  selector: 'app-feedbacks-page',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass']
})
export class FeedbacksComponent implements OnInit, OnDestroy {
  private subscrUser: Subscription;
  private feedbacks: Observable<Feedback[]>;
  private user: UserOnline;

  constructor(
    private state: StateService,
    private feedbackService: FeedbackService,
    private route: ActivatedRoute
  ) {
    this.feedbacks = this.route.data.pipe(
      map(data => data.feedbacks )
    );
  }

  ngOnInit() {
    this.subscrUser = this.state.userOnline$.subscribe(item => this.user = item);
  }

  ngOnDestroy() {
    this.subscrUser.unsubscribe();
  }

}
