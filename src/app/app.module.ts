import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { SeriesCardsComponent } from './series-cards/series-cards.component';
import { MovieComponent } from './movie/movie.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { UpcomingMoviesCardComponent } from './upcoming-movies-card/upcoming-movies-card.component';
import { UpcomingSeriesCardComponent } from './upcoming-series-card/upcoming-series-card.component';
import { TopMoviesCardComponent } from './top-movies-card/top-movies-card.component';
import { TopSeriesCardComponent } from './top-series-card/top-series-card.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { SearchMovieCardComponent } from './search-movie-card/search-movie-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MovieCardsComponent,
    TvshowsComponent,
    SeriesCardsComponent,
    MovieComponent,
    TvshowComponent,

    UpcomingMoviesCardComponent,
    UpcomingSeriesCardComponent,
    TopMoviesCardComponent,
    TopSeriesCardComponent,
    SearchPipe,
    SearchMovieCardComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
