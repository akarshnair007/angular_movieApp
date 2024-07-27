import { Component, OnInit } from '@angular/core';
import { ServicenameService } from '../api/servicename.service';

@Component({
  selector: 'app-top-movies-card',
  templateUrl: './top-movies-card.component.html',
  styleUrls: ['./top-movies-card.component.css'],
})
export class TopMoviesCardComponent implements OnInit {
  topMovie: any = '';

  constructor(private api: ServicenameService) {}

  ngOnInit(): void {
    this.api.topRatedMovies().subscribe({
      next: (res: any) => {
        this.topMovie = res.results;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
