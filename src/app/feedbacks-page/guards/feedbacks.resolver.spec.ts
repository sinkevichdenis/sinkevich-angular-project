import { TestBed } from '@angular/core/testing';

import { FeedbacksResolver } from './feedbacks.resolver';

describe('FeedbacksResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedbacksResolver = TestBed.get(FeedbacksResolver);
    expect(service).toBeTruthy();
  });
});
