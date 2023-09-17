import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDiagnosticoPlanPageComponent } from './index-diagnostico-plan-page.component';

describe('IndexDiagnosticoPlanPageComponent', () => {
  let component: IndexDiagnosticoPlanPageComponent;
  let fixture: ComponentFixture<IndexDiagnosticoPlanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexDiagnosticoPlanPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexDiagnosticoPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
