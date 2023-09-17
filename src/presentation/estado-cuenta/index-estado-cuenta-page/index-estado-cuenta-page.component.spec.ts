import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEstadoCuentaPageComponent } from './index-estado-cuenta-page.component';

describe('IndexEstadoCuentaPageComponent', () => {
  let component: IndexEstadoCuentaPageComponent;
  let fixture: ComponentFixture<IndexEstadoCuentaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEstadoCuentaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexEstadoCuentaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
