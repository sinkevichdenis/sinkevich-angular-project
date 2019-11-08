import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaContainerComponent } from './cpa.component';

describe('CpaContainerComponent', () => {
  let component: CpaContainerComponent;
  let fixture: ComponentFixture<CpaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
