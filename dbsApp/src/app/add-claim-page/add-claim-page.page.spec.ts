import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClaimPagePage } from './add-claim-page.page';

describe('AddClaimPagePage', () => {
  let component: AddClaimPagePage;
  let fixture: ComponentFixture<AddClaimPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClaimPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClaimPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
