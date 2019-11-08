import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/internal/operators';
import { FeedbackService } from './services/feedback.service';
import { Feedback } from '../core/models/feedback.interface';

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
