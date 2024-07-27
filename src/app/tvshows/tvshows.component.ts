import { Component } from '@angular/core';
import { ServicenameService } from '../api/servicename.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css'],
})
export class TvshowsComponent {
  input: string = '';
  searchData: any[] = [];
  showSearch: boolean = false;

  constructor(private api: ServicenameService) {}

  search() {
    if (this.input.trim() === '') {
      return;
    }

    this.api.searchSeries(this.input).subscribe({
      next: (res: any) => {
        this.searchData = res.results;
        this.showSearch = true;
        console.log(this.searchData);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onInputChange(): void {
    if (this.input.trim() === '') {
      this.showSearch = false; // Reset the search results view
    }
  }
}
