import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {FavouriteMovieService} from '../../../services/favourite-movie.service';
import {Movie} from '../../../model/Movie';
import {MovieResults} from '../../../model/MovieResults';
import {Genre} from '../../../model/Genre';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  topRatedMovies: Movie [] = [];
  searchName: string;
  posterPath: string = 'http://image.tmdb.org/t/p/w500';
  movieGenres: [{id:number, name: string}];
  movieTemp: Movie [] = [];

  TopRatedMovies: Array<Movie>;

  constructor(private apiService: ApiService, private favouriteMovieService: FavouriteMovieService) { }

  ngOnInit() {
    this.getMovieGenres();

    return this.apiService.getTopRatedData()
      .subscribe((data: MovieResults) => {
        this.topRatedMovies  = data.results;
        this.TopRatedMovies = data.results;
      });
  }



  getMovieGenres() {
    this.apiService.getMovieGenreData()
      .subscribe((data: Genre) => {
        this.movieGenres = data.genres;
      });
  }


  selectedGenreOnClick(id: number) {
    this.TopRatedMovies.forEach(function (movie)  {
        if(movie.genre_ids.includes(id)){
          this.movieTemp.push(movie);
        }

      } .bind(this)
    );
    this.topRatedMovies = this.movieTemp;
  }


  onAddToFavourites(popular) {
    const favMovie = {title: popular.title, id: popular.id, poster_path: popular.poster_path};
    this.favouriteMovieService.insertOne(favMovie)
      .subscribe((response: any) => {
      });
  }
}
