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

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('email')
    // items to check that user has been logged out:
    // console.log(sessionStorage.getItem('email'));
    // return console.log("user has been logged out");
  }

}
