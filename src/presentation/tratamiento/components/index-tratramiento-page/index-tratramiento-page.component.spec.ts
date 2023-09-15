import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTratramientoPageComponent } from './index-tratramiento-page.component';

describe('IndexTratramientoPageComponent', () => {
  let component: IndexTratramientoPageComponent;
  let fixture: ComponentFixture<IndexTratramientoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTratramientoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexTratramientoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
