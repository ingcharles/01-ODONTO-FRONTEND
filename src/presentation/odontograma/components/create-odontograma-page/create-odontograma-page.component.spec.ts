import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOdontogramaPageComponent } from './create-odontograma-page.component';

describe('CreateOdontogramaPageComponent', () => {
  let component: CreateOdontogramaPageComponent;
  let fixture: ComponentFixture<CreateOdontogramaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOdontogramaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOdontogramaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
