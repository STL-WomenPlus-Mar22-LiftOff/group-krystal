import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})

// export class UserService {

//   private baseUrl = "http://localhost:8080/user"; //backend endpoint

//   constructor(private http: HttpClient) { }

//   getUser(): any {
//     return this.http.get(this.baseUrl)
//     .subscribe(response => response);
//   }
// }

//Originally we had below but unsure how to keep type Observable when using subscribe-> keep getting errors

export class UserService {

  private baseUrl:string; //backend endpoint
 
  constructor(private http: HttpClient) { 
    this.baseUrl = "http://localhost:8080/user";
  }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
 }
 public save(user:User) {
   return this.http.post<User>(this.baseUrl, user);
 }
}


