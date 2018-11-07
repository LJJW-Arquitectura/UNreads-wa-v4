import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadlistPage } from './readlist.page';

describe('ReadlistPage', () => {
  let component: ReadlistPage;
  let fixture: ComponentFixture<ReadlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
