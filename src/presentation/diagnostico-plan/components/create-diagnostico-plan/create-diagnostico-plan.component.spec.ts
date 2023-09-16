import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiagnosticoPlanComponent } from './create-diagnostico-plan.component';

describe('CreateDiagnosticoPlanComponent', () => {
  let component: CreateDiagnosticoPlanComponent;
  let fixture: ComponentFixture<CreateDiagnosticoPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDiagnosticoPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDiagnosticoPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
