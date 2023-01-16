import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Symptom } from 'src/app/model/symptom';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/symptom";
  }

  getSymptom(): Observable<Symptom[]>{
    return this.http.get<Symptom[]>(`${this.url}`);
  }

  public findAll(): Observable<Symptom[]>{
    return this.http.get<Symptom[]>(`${this.url}`);
  }

  public save(symptom: Symptom) {
    return this.http.post<Symptom>(this.url, symptom);
  }

  //user.name
  // public saveSymptomAndUser (symptom: Symptom, userName: User) {
  //   return this.http.post<>(this.url, symptom, userName);
  // }
}
