import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpleadoPageComponent } from './create-empleado-page.component';

describe('CreateEmpleadoPageComponent', () => {
  let component: CreateEmpleadoPageComponent;
  let fixture: ComponentFixture<CreateEmpleadoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmpleadoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmpleadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
