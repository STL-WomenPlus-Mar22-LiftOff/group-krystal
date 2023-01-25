import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Symptom } from 'src/app/model/symptom';
//do we need to import user here?

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

  //retrieve Symptom id so its name can be displayed in Daily Tracker form and it can be sent with 
  //daily tracker Daily Entry
  public getSymptomIdByUserId(id: any): Observable<any>{
    return this.http.get<any>(`${this.url}/user/${id}`);
  }

  // public getSymptomNamebySymptomId(id: any): Observable<any>{
  //   return this.http.get<any>(`${this.url}/name/${id}`);
  // }

  public getSymptomById(id: number): Observable<Symptom>{
    return this.http.get<Symptom>(`${this.url}/${id}`);
  }
}
