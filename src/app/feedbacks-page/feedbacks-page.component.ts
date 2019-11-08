import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { StateService } from '../core/services/state.service';
import { Feedback } from '../core/models/feedback.interface';
import { UserOnline } from '../core/models/user-online.type';

@Component({
  selector: 'app-feedbacks-page',
  templateUrl: './feedbacks-page.component.html',
  styleUrls: ['./feedbacks-page.component.sass']
})
export class FeedbacksPageComponent implements OnInit, OnDestroy {
  private subscrUser: Subscription;
  private subscrFeed: Subscription;
  private feedbacks: Observable<Feedback[]>;
  private feedbacksCurrent: Observable<Feedback[]>;
  private user: UserOnline;

  lowValue = 0;
  highValue = 5;
  lengthFeedArr: number;
  readonly pageSize = this.highValue - this.lowValue;

  constructor(
    private state: StateService
  ) {}

  ngOnInit(): void {
    this.subscrUser = this.state.userOnline$.subscribe(item => this.user = item);
    this.subscrFeed = this.state.feedbacks$.subscribe(item => {
      this.lengthFeedArr = (item) ? item.length : 0;
      this.feedbacks = of((item) ? item : []);
      this.feedCurrentChange(this.lowValue);
    });
  }

  ngOnDestroy(): void {
    this.subscrUser.unsubscribe();
    this.subscrFeed.unsubscribe();
  }

  pageChange(event): void {
    this.lowValue = event.low;
    this.highValue = event.high;
    this.feedCurrentChange(this.lowValue);
  }

  feedCurrentChange(low: number, step: number = this.pageSize): void {
    this.feedbacksCurrent = this.feedbacks.pipe(
      map(items => {
          return items.slice(low , low + step);
      })
    );
  }
}
