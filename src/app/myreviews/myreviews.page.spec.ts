import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreviewsPage } from './myreviews.page';

describe('MyreviewsPage', () => {
  let component: MyreviewsPage;
  let fixture: ComponentFixture<MyreviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreviewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
