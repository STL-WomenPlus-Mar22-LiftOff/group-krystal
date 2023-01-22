import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Symptom } from 'src/app/model/symptom';

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

  //retrieve Symptom so its name can be displayed in Daily Tracker form and it can be sent with 
  //daily tracker Daily Entry
  getSymptomById(id: number): Observable<Symptom>{
    return this.http.get<Symptom>(`${this.url}/${id}`);
  }
}
