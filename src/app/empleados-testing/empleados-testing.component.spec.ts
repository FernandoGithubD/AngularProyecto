import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosTestingComponent } from './empleados-testing.component';

describe('EmpleadosTestingComponent', () => {
  let component: EmpleadosTestingComponent;
  let fixture: ComponentFixture<EmpleadosTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosTestingComponent]
    });
    fixture = TestBed.createComponent(EmpleadosTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
