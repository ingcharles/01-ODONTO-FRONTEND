import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAplicacionPageComponent } from './menu-aplicacion-page.component';

describe('MenuAplicacionPageComponent', () => {
  let component: MenuAplicacionPageComponent;
  let fixture: ComponentFixture<MenuAplicacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuAplicacionPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MenuAplicacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
