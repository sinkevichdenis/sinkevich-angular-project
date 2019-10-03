import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusPageComponent } from './minus-page.component';

describe('MinusPageComponent', () => {
  let component: MinusPageComponent;
  let fixture: ComponentFixture<MinusPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinusPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
