import { TestBed } from '@angular/core/testing';

import { NowPlayingMovieComponent } from './now-playing-movie.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('NowPlayingMovieComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [NowPlayingMovieComponent]
  }));

it('should be created', () => {
  const component: NowPlayingMovieComponent = TestBed.get(NowPlayingMovieComponent);
  expect(component).toBeTruthy();
});

it('should have getData function', () => {
  const component: NowPlayingMovieComponent = TestBed.get(NowPlayingMovieComponent);
  expect(component.nowPlayingMovies).toBeTruthy();
});

});
