import { Component, OnInit } from '@angular/core';
import { ServicenameService } from '../api/servicename.service';

@Component({
  selector: 'app-upcoming-movies-card',
  templateUrl: './upcoming-movies-card.component.html',
  styleUrls: ['./upcoming-movies-card.component.css'],
})
export class UpcomingMoviesCardComponent implements OnInit {
  upcomingMovie: any = '';

  constructor(private api: ServicenameService) {}

  ngOnInit(): void {
    this.api.getUpComingMovies().subscribe({
      next: (res: any) => {
        this.upcomingMovie = res.results;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
