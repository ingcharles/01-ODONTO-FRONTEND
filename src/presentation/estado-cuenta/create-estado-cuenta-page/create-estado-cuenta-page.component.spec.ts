import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstadoCuentaPageComponent } from './create-estado-cuenta-page.component';

describe('CreateEstadoCuentaPageComponent', () => {
  let component: CreateEstadoCuentaPageComponent;
  let fixture: ComponentFixture<CreateEstadoCuentaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEstadoCuentaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEstadoCuentaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
