import { Component, OnInit } from '@angular/core';
import { ServicenameService } from '../api/servicename.service';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css'],
})
export class MovieCardsComponent implements OnInit {
  popularMovies: any = '';

  constructor(private api: ServicenameService) {}

  ngOnInit(): void {
    this.api.getPopularMovie().subscribe({
      next: (res: any) => {
        console.log(res.results);
        this.popularMovies = res.results;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
