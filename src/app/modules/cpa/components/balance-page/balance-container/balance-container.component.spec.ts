import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceContainerComponent } from './balance-container.component';

describe('BalanceContainerComponent', () => {
  let component: BalanceContainerComponent;
  let fixture: ComponentFixture<BalanceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
