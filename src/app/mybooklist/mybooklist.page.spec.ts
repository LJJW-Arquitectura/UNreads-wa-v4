import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybooklistPage } from './mybooklist.page';

describe('MybooklistPage', () => {
  let component: MybooklistPage;
  let fixture: ComponentFixture<MybooklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybooklistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybooklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
