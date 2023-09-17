import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotificacionPageComponent } from './create-notificacion-page.component';

describe('CreateNotificacionPageComponent', () => {
  let component: CreateNotificacionPageComponent;
  let fixture: ComponentFixture<CreateNotificacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNotificacionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNotificacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
