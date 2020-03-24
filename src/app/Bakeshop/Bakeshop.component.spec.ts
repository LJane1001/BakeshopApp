/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BakeshopComponent } from './Bakeshop.component';

describe('BakeshopComponent', () => {
  let component: BakeshopComponent;
  let fixture: ComponentFixture<BakeshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
