import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRadioTogglePage } from './check-radio-toggle.page';

describe('CheckRadioTogglePage', () => {
  let component: CheckRadioTogglePage;
  let fixture: ComponentFixture<CheckRadioTogglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRadioTogglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRadioTogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
