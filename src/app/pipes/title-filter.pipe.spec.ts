import { TitleFilterPipe } from './title-filter.pipe';
import {NowPlayingMovieComponent} from "../components/pages/now-playing-movie/now-playing-movie.component";

describe('TitleFilterPipe', () => {
  let pipe: TitleFilterPipe;

  beforeEach(() => {
    pipe = new TitleFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

});
