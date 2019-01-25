import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesChipsPage } from './badges-chips.page';

describe('BadgesChipsPage', () => {
  let component: BadgesChipsPage;
  let fixture: ComponentFixture<BadgesChipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesChipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesChipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
