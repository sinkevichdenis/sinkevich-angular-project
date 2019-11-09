import { TestBed } from '@angular/core/testing';

import { DateOptionsService } from './date-options.service';

describe('DateOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateOptionsService = TestBed.get(DateOptionsService);
    expect(service).toBeTruthy();
  });
});
