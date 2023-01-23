import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  private baseUrl:string;

  constructor(private httpClient:HttpClient) {
    this.baseUrl = "http://localhost:8080/user/authenticate";
   }

  authenticate(user: any) {
    return this.httpClient.post(this.baseUrl,user);
  }

  //checks if user is signed in, if not, will return null

  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('email');
    return !(user === null) && true;
  }

  //removes user from session. adjusted to remove new session storage values.
  logOut() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('name');
    // items to check that user has been logged out:
    console.log(sessionStorage.getItem('id')+": should be null");
    return console.log("user has been logged out");
  }

}
