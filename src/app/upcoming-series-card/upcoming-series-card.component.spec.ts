import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSeriesCardComponent } from './upcoming-series-card.component';

describe('UpcomingSeriesCardComponent', () => {
  let component: UpcomingSeriesCardComponent;
  let fixture: ComponentFixture<UpcomingSeriesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingSeriesCardComponent]
    });
    fixture = TestBed.createComponent(UpcomingSeriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
