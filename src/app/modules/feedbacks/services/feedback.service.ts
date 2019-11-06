import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {map, take, tap} from 'rxjs/internal/operators';
import { FirebaseService } from '../../../core/services/firebase.service';
import { StateService } from '../../../core/services/state.service';
import { UserOnline } from '../../../models/userOnline.type';
import { Feedback } from '../../../models/feedback.interface';

@Injectable()
export class FeedbackService {
  private dbKey = 'feedbacks';
  private user: UserOnline;

  constructor(private fb: FirebaseService, private state: StateService) {
    this.state.userOnline$.subscribe(item => this.user = item);
  }

  get(): Observable<Feedback[]> {
    console.log('GET');
    return this.fb.getItems<Feedback>(this.dbKey).pipe(
      map(items => {
        items =  items.sort((a, b) => b.date - a.date);
        this.addToStream(items);
        console.log('get', items);
        return items;
      })
    );
  }

  add(item: Feedback): void {
    this.fb.addItem(this.dbKey, item);
    this.get().subscribe(() => console.log('add subscribe'));
  }

  private addToStream(items): void {
    console.log('addToStream', items);
    this.state.feedbacks$.next(items);
  }
}
