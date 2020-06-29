import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey: string = 'b1e86b5585ce562ad26b909dfeee3fcc';
  region: '&region=CH';
  pageLanguage: string = '&language=en-US';
  pageNumber: string = '&page=1';
  searchQuery: string ='&query=';
  includeAdult: string = '&include_adult=false';
  urlPopular: string = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  urlNowPlaying: string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
  urlTopRated: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=';
  urlMovieGenre: string = 'https://api.themoviedb.org/3/genre/movie/list?api_key=';
  urlSearch: string = 'https://api.themoviedb.org/3/search/movie?api_key=';


  constructor(public http: HttpClient) {
  }

  getPopularMovieData() {
    return this.http.get(this.urlPopular + this.apiKey + this.pageLanguage + this.pageNumber);
  }

  getNowPlayingMovieData() {
    return this.http.get(this.urlNowPlaying + this.apiKey + this.pageLanguage + this.pageNumber + this.region);

  }

  getTopRatedData() {
    return this.http.get(this.urlTopRated + this.apiKey + this.pageLanguage + this.pageNumber);
  }

  getMovieGenreData() {
    return this.http.get(this.urlMovieGenre + this.apiKey + this.pageLanguage + this.pageNumber);
  }

  getSearchData(searchMovieInput: string) {
    return this.http.get(this.urlSearch + this.apiKey + this.pageLanguage + this.searchQuery + searchMovieInput + this.pageNumber + this.includeAdult);
  }

}

