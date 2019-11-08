import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusPageComponent } from './plus-page.component';

describe('PlusPageComponent', () => {
  let component: PlusPageComponent;
  let fixture: ComponentFixture<PlusPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
