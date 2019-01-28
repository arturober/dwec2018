import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookLoginPage } from './facebook-login.page';

describe('FacebookLoginPage', () => {
  let component: FacebookLoginPage;
  let fixture: ComponentFixture<FacebookLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
