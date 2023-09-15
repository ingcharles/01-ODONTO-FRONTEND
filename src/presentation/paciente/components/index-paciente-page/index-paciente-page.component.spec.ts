import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPacientePageComponent } from './index-paciente-page.component';

describe('IndexPacienteComponent', () => {
  let component: IndexPacientePageComponent;
  let fixture: ComponentFixture<IndexPacientePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexPacientePageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IndexPacientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
