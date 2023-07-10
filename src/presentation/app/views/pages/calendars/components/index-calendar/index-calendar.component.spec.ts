import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCalendarComponent } from './index-calendar.component';

describe('IndexCalendarComponent', () => {
  let component: IndexCalendarComponent;
  let fixture: ComponentFixture<IndexCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexCalendarComponent]
    });
    fixture = TestBed.createComponent(IndexCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
