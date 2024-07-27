import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMoviesCardComponent } from './top-movies-card.component';

describe('TopMoviesCardComponent', () => {
  let component: TopMoviesCardComponent;
  let fixture: ComponentFixture<TopMoviesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMoviesCardComponent]
    });
    fixture = TestBed.createComponent(TopMoviesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
