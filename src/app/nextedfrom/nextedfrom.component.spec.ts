/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NextedfromComponent } from './nextedfrom.component';

describe('NextedfromComponent', () => {
  let component: NextedfromComponent;
  let fixture: ComponentFixture<NextedfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextedfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextedfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
