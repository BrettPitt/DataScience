import {Movie} from './Movie';


export interface MovieResults {

  page: number;
  total_results: number;
  total_pages: number;
  results: [Movie];

}
