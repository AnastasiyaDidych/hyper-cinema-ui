import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoefficientEditComponent } from './coefficient-edit.component';

describe('CoefficientEditComponent', () => {
  let component: CoefficientEditComponent;
  let fixture: ComponentFixture<CoefficientEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoefficientEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoefficientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
