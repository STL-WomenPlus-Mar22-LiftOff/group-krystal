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
    let user = sessionStorage.getItem('id');
    // console.log("logged in with " + user);
    return !(user === null);
  }

  //removes user from session. adjusted to remove new session storage values.
  logOut() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('symptomId1');
    sessionStorage.removeItem('symptomId2');
    sessionStorage.removeItem('symptomId3');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('name');
  }

  getUserByEmail(email: string): Observable<JSON>{
    return this.httpClient.get<JSON>(`${this.baseUrl}/${email}`);
  }

}
