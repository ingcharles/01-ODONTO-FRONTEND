import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePerfilComponent } from './home-perfil.component';

describe('HomePerfilComponent', () => {
  let component: HomePerfilComponent;
  let fixture: ComponentFixture<HomePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
