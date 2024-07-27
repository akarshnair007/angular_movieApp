import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicenameService } from '../api/servicename.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: any = '';
  rating: any = '';

  constructor(private route: ActivatedRoute, private api: ServicenameService) {}
  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      const { id } = res;
      this.viewMovie(id);
    });
  }

  viewMovie(id: any) {
    this.api.getMovie(id).subscribe({
      next: (res: any) => {
        this.movie = res;
        console.log(res);
        this.rating = res.vote_average.toFixed(1);
        console.log(this.rating);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
