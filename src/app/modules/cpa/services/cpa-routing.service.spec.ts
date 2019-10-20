import { TestBed } from '@angular/core/testing';

import { CpaRoutingService } from './cpa-routing.service';

describe('CpaRoutingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CpaRoutingService = TestBed.get(CpaRoutingService);
    expect(service).toBeTruthy();
  });
});
