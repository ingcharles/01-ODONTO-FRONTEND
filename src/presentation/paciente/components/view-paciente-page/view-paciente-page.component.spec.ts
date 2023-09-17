import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPacientePageComponent } from './view-paciente-page.component';

describe('ViewPacientePageComponent', () => {
  let component: ViewPacientePageComponent;
  let fixture: ComponentFixture<ViewPacientePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPacientePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPacientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
