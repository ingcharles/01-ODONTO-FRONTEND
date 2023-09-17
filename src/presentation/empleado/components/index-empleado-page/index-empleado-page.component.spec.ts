import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEmpleadoPageComponent } from './index-empleado-page.component';

describe('IndexEmpleadoPageComponent', () => {
  let component: IndexEmpleadoPageComponent;
  let fixture: ComponentFixture<IndexEmpleadoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEmpleadoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexEmpleadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
