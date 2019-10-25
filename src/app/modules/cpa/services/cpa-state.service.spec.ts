import { TestBed } from '@angular/core/testing';

import { CpaStateService } from './cpa-state.service';

describe('CpaStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CpaStateService = TestBed.get(CpaStateService);
    expect(service).toBeTruthy();
  });
});
