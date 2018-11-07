import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysuggestionsPage } from './mysuggestions.page';

describe('MysuggestionsPage', () => {
  let component: MysuggestionsPage;
  let fixture: ComponentFixture<MysuggestionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysuggestionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysuggestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
