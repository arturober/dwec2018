import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentsPage } from './segments.page';

describe('SegmentsPage', () => {
  let component: SegmentsPage;
  let fixture: ComponentFixture<SegmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
