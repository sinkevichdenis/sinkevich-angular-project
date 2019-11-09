import { TestBed } from '@angular/core/testing';
import { BalanceResolver } from './balance.resolver';

describe('BalanceResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BalanceResolver = TestBed.get(BalanceResolver);
    expect(service).toBeTruthy();
  });
});
