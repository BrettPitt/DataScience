import { TestBed } from '@angular/core/testing';

import { TopRatedComponent } from './top-rated.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TopRatedComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TopRatedComponent]
  }));

  it('should be created', () => {
    const component: TopRatedComponent = TestBed.get(TopRatedComponent);
    expect(component).toBeTruthy();
  });

  it('should have getData function', () => {
    const component: TopRatedComponent = TestBed.get(TopRatedComponent);
    expect(component.nowPlayingMovies).toBeTruthy();
  });

});
