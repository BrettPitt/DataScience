import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {FavouriteMovieService} from '../../../services/favourite-movie.service';
import {Favourite} from '../../../model/Favourite';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {


  constructor(private apiService: ApiService, private favouriteMovieService: FavouriteMovieService) {
  }

  @Input() favMovieListFromMongoDB: Array<Favourite> = [];


  ngOnInit() {
    this.getFavouriteMovieList();
  }


  getFavouriteMovieList() {
    this.favouriteMovieService.getFavouriteMovies()
      .subscribe((data: Array<Favourite>) => {
        this.favMovieListFromMongoDB = data;
      });
  }


  deleteFavouriteMovie(index: number): void {
    this.favouriteMovieService.deleteFavouriteMovie(this.favMovieListFromMongoDB[index])
      .subscribe((response: any) => {
        this.getFavouriteMovieList();
      });
  }

}
