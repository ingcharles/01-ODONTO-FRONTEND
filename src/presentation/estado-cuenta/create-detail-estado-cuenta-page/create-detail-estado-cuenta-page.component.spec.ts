import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDetailEstadoCuentaPageComponent } from './create-detail-estado-cuenta-page.component';

describe('CreateDetailEstadoCuentaPageComponent', () => {
  let component: CreateDetailEstadoCuentaPageComponent;
  let fixture: ComponentFixture<CreateDetailEstadoCuentaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDetailEstadoCuentaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDetailEstadoCuentaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
