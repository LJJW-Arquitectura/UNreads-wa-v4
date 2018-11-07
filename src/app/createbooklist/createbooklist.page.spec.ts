import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebooklistPage } from './createbooklist.page';

describe('CreatebooklistPage', () => {
  let component: CreatebooklistPage;
  let fixture: ComponentFixture<CreatebooklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebooklistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebooklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
