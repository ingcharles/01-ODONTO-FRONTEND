import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDataGridEmpleadoComponent } from './index-data-grid-empleado.component';

describe('IndexDataGridEmpleadoComponent', () => {
  let component: IndexDataGridEmpleadoComponent;
  let fixture: ComponentFixture<IndexDataGridEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexDataGridEmpleadoComponent]
    });
    fixture = TestBed.createComponent(IndexDataGridEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
