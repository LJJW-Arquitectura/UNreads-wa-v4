import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbooklistPage } from './allbooklist.page';

describe('AllbooklistPage', () => {
  let component: AllbooklistPage;
  let fixture: ComponentFixture<AllbooklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbooklistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbooklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
