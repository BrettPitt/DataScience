import {Component, OnInit} from '@angular/core';
import {MovieResults} from '../../../model/MovieResults';
import {ApiService} from '../../../services/api.service';
import {Movie} from '../../../model/Movie';
import {FavouriteMovieService} from '../../../services/favourite-movie.service';
import {Genre} from '../../../model/Genre';


@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  popular: Movie [] = [];
  searchName: string;
  posterPath: string = 'http://image.tmdb.org/t/p/w500';
  movieGenres: [{id:number, name: string}];
  movieTemp: Movie [] = [];

  Popular: Array<Movie>;


  constructor(private apiService: ApiService, private favouriteMovieService: FavouriteMovieService) { }



  ngOnInit() {
    this.getMovieGenres();


    return this.apiService.getPopularMovieData()
      .subscribe((data: MovieResults) => {
        this.popular = data.results;
        this.Popular = data.results;
      });

  }



  getMovieGenres() {
    this.apiService.getMovieGenreData()
      .subscribe((data: Genre) => {
        this.movieGenres = data.genres;
      });
  }


  selectedGenreOnClick(id: number) {
    this.Popular.forEach(function (movie)  {
        if(movie.genre_ids.includes(id)){
          this.movieTemp.push(movie);
        }

      } .bind(this)
    );
    this.popular = this.movieTemp;
  }


  onAddToFavourites(popular) {
    const favMovie = {title: popular.title, id: popular.id, poster_path: popular.poster_path};
    this.favouriteMovieService.insertOne(favMovie)
      .subscribe((response: any) => {
      });
  }



}
