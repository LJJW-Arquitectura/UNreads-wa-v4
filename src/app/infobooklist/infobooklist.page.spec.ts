import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobooklistPage } from './infobooklist.page';

describe('InfobooklistPage', () => {
  let component: InfobooklistPage;
  let fixture: ComponentFixture<InfobooklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfobooklistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobooklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
