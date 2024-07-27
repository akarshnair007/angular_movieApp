import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicenameService {
  private apiKey: string = '821061591b6f73de7fa19e01d0dd4b5d';
  private baseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovie() {
    return this.http.get(
      `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`
    );
  }

  getPopularShow() {
    return this.http.get(`${this.baseUrl}/tv/popular?api_key=${this.apiKey}`);
  }

  getMovie(id: any) {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getTvShow(id: any) {
    return this.http.get(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`);
  }

  getUpComingMovies() {
    return this.http.get(
      `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}`
    );
  }

  getUpComingSeries() {
    return this.http.get(
      `${this.baseUrl}/tv/on_the_air?api_key=${this.apiKey}`
    );
  }

  topRatedMovies() {
    return this.http.get(
      `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`
    );
  }

  topRatedShows() {
    return this.http.get(`${this.baseUrl}/tv/top_rated?api_key=${this.apiKey}`);
  }
  searchMovies(query: string) {
    return this.http.get(
      `${this.baseUrl}/search/movie?query=${query}&api_key=${this.apiKey}`
    );
  }
  searchSeries(query: string) {
    return this.http.get(
      `${this.baseUrl}/search/tv?query=${query}&api_key=${this.apiKey}`
    );
  }
}
