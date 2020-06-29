import { TestBed } from '@angular/core/testing';

import { PopularComponent } from './popular.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('PopularComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [PopularComponent]
  }));

  it('should be created', () => {
    const component: PopularComponent = TestBed.get(PopularComponent);
    expect(component).toBeTruthy();
  });

  it('should have getData function', () => {
    const component: PopularComponent = TestBed.get(PopularComponent);
    expect(component.nowPlayingMovies).toBeTruthy();
  });

});
