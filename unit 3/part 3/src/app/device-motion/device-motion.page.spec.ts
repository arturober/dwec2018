import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMotionPage } from './device-motion.page';

describe('DeviceMotionPage', () => {
  let component: DeviceMotionPage;
  let fixture: ComponentFixture<DeviceMotionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMotionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMotionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
