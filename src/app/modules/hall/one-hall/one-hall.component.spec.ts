import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneHallComponent } from './one-hall.component';

describe('OneHallComponent', () => {
  let component: OneHallComponent;
  let fixture: ComponentFixture<OneHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
