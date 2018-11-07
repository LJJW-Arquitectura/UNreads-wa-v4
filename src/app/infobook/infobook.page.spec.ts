import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobookPage } from './infobook.page';

describe('InfobookPage', () => {
  let component: InfobookPage;
  let fixture: ComponentFixture<InfobookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfobookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
