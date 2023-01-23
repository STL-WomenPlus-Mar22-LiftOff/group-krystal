import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  private baseUrl:string;

  constructor(private httpClient:HttpClient) {
    this.baseUrl = "http://localhost:8080/user";
   }

  authenticate(user: any) {
    return this.httpClient.post(`${this.baseUrl}/authenticate`,user);
  }

  //checks if user is signed in, if not, will return null
  isUserLoggedIn() {
    let user = sessionStorage.getItem('email');
    console.log("logged in with " + user);
    return !(user === null);
  }

  //removes user from session
  logOut() {
    sessionStorage.removeItem('email')
    // items to check that user has been logged out:
    // console.log(sessionStorage.getItem('email'));
    // return console.log("user has been logged out");
  }

  getUserByEmail(email: string): Observable<JSON>{
    return this.httpClient.get<JSON>(`${this.baseUrl}/${email}`);
  }

}
