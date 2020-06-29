import { TestBed } from '@angular/core/testing';

import { FavouriteMovieService } from './favourite-movie.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('FavouriteMovieService', () => {
  let service: FavouriteMovieService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [FavouriteMovieService]
  }));

  it('should be created', () => {
    const service: FavouriteMovieService = TestBed.get(FavouriteMovieService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: FavouriteMovieService = TestBed.get(FavouriteMovieService);
    expect(service.getFavouriteMovies).toBeTruthy();
  });

});
