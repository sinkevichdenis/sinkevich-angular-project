import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, skip } from 'rxjs/internal/operators';
import { FirebaseService } from '../../core/services/firebase.service';
import { StateService } from '../../core/services/state.service';
import { UserOnline } from '../../core/models/user-online.type';
import { Feedback } from '../../core/models/feedback.interface';

@Injectable()
export class FeedbackService {
  private dbKey = 'feedbacks';
  private user: UserOnline;
  // don't understand why cross through get() twice if new feedback was added
  private skipValue = 0;

  constructor(private fb: FirebaseService, private state: StateService) {
    this.state.userOnline$.subscribe(item => this.user = item);
  }

  get(): Observable<Feedback[]> {
    return this.fb.getItems<Feedback>(this.dbKey).pipe(
      skip(this.skipValue),
      map(items => {
        items =  items.sort((a, b) => b.date - a.date);
        this.addToStream(items);
        return items;
      })
    );
  }

  add(item: Feedback): void {
    this.fb.addItem(this.dbKey, item);
    this.skipValue = 1;
    this.get().subscribe();
  }

  private addToStream(items): void {
    this.state.feedbacks$.next(items);
  }

}
