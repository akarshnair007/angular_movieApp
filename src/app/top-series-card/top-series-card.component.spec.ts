import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSeriesCardComponent } from './top-series-card.component';

describe('TopSeriesCardComponent', () => {
  let component: TopSeriesCardComponent;
  let fixture: ComponentFixture<TopSeriesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopSeriesCardComponent]
    });
    fixture = TestBed.createComponent(TopSeriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
