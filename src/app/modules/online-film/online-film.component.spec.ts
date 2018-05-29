import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineFilmComponent } from './online-film.component';

describe('OnlineFilmComponent', () => {
  let component: OnlineFilmComponent;
  let fixture: ComponentFixture<OnlineFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
