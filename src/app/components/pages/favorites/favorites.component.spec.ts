import { TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FavoritesComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [FavoritesComponent]
  }));

  it('should be created', () => {
    const service: FavoritesComponent = TestBed.get(FavoritesComponent);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: FavoritesComponent = TestBed.get(FavoritesComponent);
    expect(service.getFavouriteMovieList).toBeTruthy();
  });

});
