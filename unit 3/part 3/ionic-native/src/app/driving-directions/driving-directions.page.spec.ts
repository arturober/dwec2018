import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingDirectionsPage } from './driving-directions.page';

describe('DrivingDirectionsPage', () => {
  let component: DrivingDirectionsPage;
  let fixture: ComponentFixture<DrivingDirectionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingDirectionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingDirectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
