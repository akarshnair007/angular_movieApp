import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMoviesCardComponent } from './upcoming-movies-card.component';

describe('UpcomingMoviesCardComponent', () => {
  let component: UpcomingMoviesCardComponent;
  let fixture: ComponentFixture<UpcomingMoviesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingMoviesCardComponent]
    });
    fixture = TestBed.createComponent(UpcomingMoviesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
