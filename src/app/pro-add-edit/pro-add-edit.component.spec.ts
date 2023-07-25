import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProAddEditComponent } from './pro-add-edit.component';

describe('ProAddEditComponent', () => {
  let component: ProAddEditComponent;
  let fixture: ComponentFixture<ProAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProAddEditComponent]
    });
    fixture = TestBed.createComponent(ProAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
