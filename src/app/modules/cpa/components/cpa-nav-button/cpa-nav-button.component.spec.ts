import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaNavButtonComponent } from './cpa-nav-button.component';

describe('CpaNavButtonComponent', () => {
  let component: CpaNavButtonComponent;
  let fixture: ComponentFixture<CpaNavButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpaNavButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpaNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
