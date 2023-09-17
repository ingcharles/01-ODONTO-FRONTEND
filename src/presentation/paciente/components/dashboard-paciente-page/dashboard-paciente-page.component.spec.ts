import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPacientePageComponent } from './dashboard-paciente-page.component';

describe('DashboardPacientePageComponent', () => {
  let component: DashboardPacientePageComponent;
  let fixture: ComponentFixture<DashboardPacientePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPacientePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPacientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
