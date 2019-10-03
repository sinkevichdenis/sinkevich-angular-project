import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpaNavComponent } from './cpa-nav.component';

describe('CpaNavComponent', () => {
  let component: CpaNavComponent;
  let fixture: ComponentFixture<CpaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
