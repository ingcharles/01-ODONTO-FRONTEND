import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePacientePageComponent } from './create-paciente-page.component';

describe('CreatePacienteComponent', () => {
  let component: CreatePacientePageComponent;
  let fixture: ComponentFixture<CreatePacientePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePacientePageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreatePacientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
