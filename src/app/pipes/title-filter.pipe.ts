import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from "../model/Movie";

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  // filters the titles with the input tag in the component
  transform(nowPlayingMovies: Movie[], searchTerm: string): Movie [] {
    if (!nowPlayingMovies || !searchTerm) {
      return nowPlayingMovies;
    }
    return nowPlayingMovies.filter(nowPlayingMovies => nowPlayingMovies.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
