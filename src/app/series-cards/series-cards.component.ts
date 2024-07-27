import { Component, OnInit } from '@angular/core';
import { ServicenameService } from '../api/servicename.service';

@Component({
  selector: 'app-series-cards',
  templateUrl: './series-cards.component.html',
  styleUrls: ['./series-cards.component.css'],
})
export class SeriesCardsComponent implements OnInit {
  popularShows: any = '';

  constructor(private api: ServicenameService) {}

  ngOnInit(): void {
    this.api.getPopularShow().subscribe({
      next: (res: any) => {
        this.popularShows = res.results;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
