import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalScrollPage } from './horizontal-scroll.page';

describe('HorizontalScrollPage', () => {
  let component: HorizontalScrollPage;
  let fixture: ComponentFixture<HorizontalScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalScrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
