import { Component, OnInit } from '@angular/core';
import { ServicenameService } from '../api/servicename.service';

@Component({
  selector: 'app-top-series-card',
  templateUrl: './top-series-card.component.html',
  styleUrls: ['./top-series-card.component.css'],
})
export class TopSeriesCardComponent implements OnInit {
  topShows: any = '';

  constructor(private api: ServicenameService) {}

  ngOnInit(): void {
    this.api.topRatedShows().subscribe({
      next: (res: any) => {
        this.topShows = res.results;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
