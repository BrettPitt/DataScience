import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
  }
}
