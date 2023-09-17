import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgendarCitaPageComponent } from './create-agendar-cita-page.component';

describe('CreateAgendarCitaPageComponent', () => {
  let component: CreateAgendarCitaPageComponent;
  let fixture: ComponentFixture<CreateAgendarCitaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAgendarCitaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAgendarCitaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
