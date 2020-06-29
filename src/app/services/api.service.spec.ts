import {TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ApiService', () => {

  beforeEach(() => ({
    imports: [HttpClientTestingModule],
    providers: [ApiService]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should have getNowPlayingMovieData function', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getNowPlayingMovieData).toBeTruthy();
  });

  it('should have getPopularMovieData function', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getPopularMovieData).toBeTruthy();
  });

  it('should have getTopRatedData function', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getTopRatedData).toBeTruthy();
  });
  it('should have getMovieGenreData function', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getMovieGenreData).toBeTruthy();
  });

  it('should have getSearchData function', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service.getSearchData).toBeTruthy();
  });

});
