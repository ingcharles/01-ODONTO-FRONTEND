import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiagnosticoPlanPageComponent } from './create-diagnostico-plan-page.component';

describe('CreateDiagnosticoPlanPageComponent', () => {
  let component: CreateDiagnosticoPlanPageComponent;
  let fixture: ComponentFixture<CreateDiagnosticoPlanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDiagnosticoPlanPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDiagnosticoPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
