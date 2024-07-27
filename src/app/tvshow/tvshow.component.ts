import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicenameService } from '../api/servicename.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css'],
})
export class TvshowComponent implements OnInit {
  show: any = '';
  rating: any = '';
  constructor(private route: ActivatedRoute, private api: ServicenameService) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      const { id } = res;
      this.viewShow(id);
    });
  }

  viewShow(id: any) {
    this.api.getTvShow(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.show = res;
        this.rating = res.vote_average.toFixed(1);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
