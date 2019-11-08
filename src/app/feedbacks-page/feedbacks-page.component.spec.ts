import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksPageComponent } from './feedbacks-page.component';

describe('FeedbacksPageComponent', () => {
  let component: FeedbacksPageComponent;
  let fixture: ComponentFixture<FeedbacksPAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbacksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
