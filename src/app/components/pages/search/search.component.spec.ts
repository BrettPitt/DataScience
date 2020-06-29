import { TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SearchComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SearchComponent]
  }));

  it('should be created', () => {
    const component: SearchComponent = TestBed.get(SearchComponent);
    expect(component).toBeTruthy();
  });

  it('should have get movies', () => {
    const component: SearchComponent = TestBed.get(SearchComponent);
    expect(component.movies).toBeTruthy();
  });

});
