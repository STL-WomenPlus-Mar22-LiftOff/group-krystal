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

  //from AroundTown, I assumed we will need later
  // logOut() {
  //   sessionStorage.removeItem('username')
  // }

}
