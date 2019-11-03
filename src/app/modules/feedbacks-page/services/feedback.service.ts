import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
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
    return this.fb.getItems<Feedback>(this.dbKey).pipe(
      map(items => items.sort((a, b) => b.date - a.date))
    );
  }

  add(item: Feedback): void {
    this.fb.addItem(this.dbKey, item);
  }
}
