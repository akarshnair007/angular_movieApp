import { Component } from '@angular/core';
import { ServicenameService } from '../api/servicename.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  input: string = '';
  searchData: any[] = [];
  showSearch: boolean = false;

  constructor(private api: ServicenameService) {}

  search() {
    if (this.input.trim() === '') {
      return;
    }

    this.api.searchMovies(this.input).subscribe({
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
