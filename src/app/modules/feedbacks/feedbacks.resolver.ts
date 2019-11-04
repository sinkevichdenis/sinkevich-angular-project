import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FeedbackService } from './services/feedback.service';
import { Feedback } from '../../models/feedback.interface';
import { take } from 'rxjs/internal/operators';

@Injectable()
export class FeedbacksResolver implements Resolve<Feedback[]> {

  constructor(private feedbackService: FeedbackService) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<Feedback[]> | Promise<Feedback[]> | Feedback[] {
    return this.feedbackService.get().pipe(
      take(1)
    );
  }
}
