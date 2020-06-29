import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PopularComponent} from './components/pages/popular/popular.component';
import {FavoritesComponent} from './components/pages/favorites/favorites.component';
import {TopRatedComponent} from './components/pages/top-rated/top-rated.component';
import {NowPlayingMovieComponent} from './components/pages/now-playing-movie/now-playing-movie.component';
import {SearchComponent} from './components/pages/search/search.component';
import {LoginComponent} from "./components/login/login.component";
import {ErrorComponent} from "./components/error/error.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {RegisterComponent} from "./components/register/register.component";
import {EventsComponent} from "./components/events/events.component";
import {SpecialEventsComponent} from "./components/special-events/special-events.component";
import {AuthGuard} from "./guard/auth.guard";


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'popular', component: PopularComponent, canActivate: [AuthGuard]},
  {path: 'nowPlaying', component: NowPlayingMovieComponent, canActivate: [AuthGuard]},
  {path: 'favourites', component: FavoritesComponent},
  {path: 'topRated', component: TopRatedComponent, canActivate: [AuthGuard]},
  {path: 'search', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'event', component: EventsComponent},
  {path: 'special', component: SpecialEventsComponent, canActivate: [AuthGuard]},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
