import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionPageComponent } from './aplicacion-page.component';

describe('AplicacionPageComponent', () => {
  let component: AplicacionPageComponent;
  let fixture: ComponentFixture<AplicacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AplicacionPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AplicacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
