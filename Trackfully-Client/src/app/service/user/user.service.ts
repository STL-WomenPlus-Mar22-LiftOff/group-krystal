import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/user';

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

  // getUserId(): Observable<User[]>{
  //   return this.http.get<User[["id"]]>(`${this.baseUrl}`);
  // }

  //trying to get part of user object (just id and name) through GET REQUEST
//   public getUserId(id): Observable<User[]> {
//     const searchParam = 'id';
//     const urlPath = this.baseUrl + searchParam;
//     return this.http.get(urlPath).pipe(map(
//       res => res.map(({id, name})=>({id, name})) 
//     ));
// }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
 }
 public save(user:User) {
   return this.http.post<User>(this.baseUrl, user); 
   // sends user model with input info to post at "/user", there is a controller in intellij that will actually do the saving to the db.
   // it doesnt seem to show a post request if you inspect the page, but it still works somehow
 }

  public checkEmail(email: String) {
  return this.http.get<boolean>(`${this.baseUrl}/confirm/${email}`);
 }

// Removed as we do not use it currently
//  public getUserId(email: String) {
//   return this.http.get<number>(`${this.baseUrl}/${email}/id`);
//  }

 public getUserInfo(email: String) {
  return this.http.get<any>(`${this.baseUrl}/${email}`);
 }

}


