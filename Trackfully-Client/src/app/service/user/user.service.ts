import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl:string;
 
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

  public checkEmail(email: String) {
  return this.http.post<boolean>(`${this.baseUrl}/confirm/email`, email);
 }
 
 public getUserInfo(email: String) {
  return this.http.get<any>(`${this.baseUrl}/${email}`);
 }

 public getUserByUserID (id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/search/${id}`)
 }

}


