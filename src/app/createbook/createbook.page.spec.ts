import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebookPage } from './createbook.page';

describe('CreatebookPage', () => {
  let component: CreatebookPage;
  let fixture: ComponentFixture<CreatebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
