import { Component, OnInit } from '@angular/core';
import { ServicenameService } from '../api/servicename.service';

@Component({
  selector: 'app-upcoming-series-card',
  templateUrl: './upcoming-series-card.component.html',
  styleUrls: ['./upcoming-series-card.component.css'],
})
export class UpcomingSeriesCardComponent implements OnInit {
  upcomingShows: any = '';

  constructor(private api: ServicenameService) {}

  ngOnInit(): void {
    this.api.getUpComingSeries().subscribe({
      next: (res: any) => {
        this.upcomingShows = res.results;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
