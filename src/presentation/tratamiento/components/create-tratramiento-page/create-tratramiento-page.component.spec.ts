import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTratramientoPageComponent } from './create-tratramiento-page.component';

describe('CreateTratramientoPageComponent', () => {
  let component: CreateTratramientoPageComponent;
  let fixture: ComponentFixture<CreateTratramientoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTratramientoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTratramientoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
