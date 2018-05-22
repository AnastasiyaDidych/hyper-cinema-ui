import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoefficientDetailsComponent } from './coefficient-details.component';

describe('CoefficientDetailsComponent', () => {
  let component: CoefficientDetailsComponent;
  let fixture: ComponentFixture<CoefficientDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoefficientDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoefficientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
