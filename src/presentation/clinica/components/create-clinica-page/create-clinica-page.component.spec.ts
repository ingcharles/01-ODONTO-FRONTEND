import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClinicaPageComponent } from './create-clinica-page.component';

describe('CreateClinicaPageComponent', () => {
  let component: CreateClinicaPageComponent;
  let fixture: ComponentFixture<CreateClinicaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClinicaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClinicaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
