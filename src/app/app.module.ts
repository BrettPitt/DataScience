import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiService} from './services/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { HeaderComponent } from './components/navigation-bar/header/header.component';
import { FooterComponent } from './components/navigation-bar/footer/footer.component';
import { PopularComponent } from './components/pages/popular/popular.component';
import { TopRatedComponent } from './components/pages/top-rated/top-rated.component';
import {NowPlayingMovieComponent} from './components/pages/now-playing-movie/now-playing-movie.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/pages/search/search.component';
import { TitleFilterPipe } from './pipes/title-filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import {AuthService} from "./services/auth.service";
import {EventService} from "./services/event.service";
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import {AuthGuard} from "./guard/auth.guard";
import {TokenInterceptorService} from "./services/token-interceptor.service";



@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    HeaderComponent,
    FooterComponent,
    PopularComponent,
    TopRatedComponent,
    NowPlayingMovieComponent,
    SearchComponent,
    TitleFilterPipe,
    LoginComponent,
    ErrorComponent,
    WelcomeComponent,
    ListTodosComponent,
    LogoutComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [ApiService, AuthService, EventService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
