import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {map, skip, take, tap} from 'rxjs/internal/operators';
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
  private feedbacksCurrent: Observable<Feedback[]>;
  private user: UserOnline;

  lowValue = 0;
  highValue = 5;
  lengthFeedArr: number;
  readonly pageSize = this.highValue - this.lowValue;

  constructor(
    private state: StateService,
    private feedbackService: FeedbackService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscrUser = this.state.userOnline$.subscribe(item => this.user = item);
    this.feedbacks = this.route.data.pipe(
      map(data => {
        this.lengthFeedArr = data.feedbacks.length;
        console.log('this.lengthFeedArr', this.lengthFeedArr);
        return data.feedbacks;
      })
    );
    this.feedCurrentChange(this.lowValue, this.highValue);
  }

  ngOnDestroy(): void {
    this.subscrUser.unsubscribe();
  }

  pageChange(event): void {
    this.lowValue = event.low;
    this.highValue = event.high;
    this.feedCurrentChange(this.lowValue, this.highValue);
  }

  feedCurrentChange(low: number, high: number): void {
/*    if (this.feedbacksCurrent) {
      console.log('null');
      this.feedbacksCurrent = null;
    }*/
    this.feedbacksCurrent = this.feedbacks.pipe(
      tap(items => console.log('startItems', items)),
      map(items => {
          console.log('items', items.slice(low , high - low));
          console.log('low-high', low, high);
          return items.slice(low , high - low);
      })
    );
  }
}
