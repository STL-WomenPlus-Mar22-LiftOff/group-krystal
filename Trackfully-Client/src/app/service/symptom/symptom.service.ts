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

  public findAll(): Observable<Symptom[]>{
    return this.http.get<Symptom[]>(`${this.url}`);
  }

  public save(symptom: Symptom) {
    return this.http.post<Symptom>(this.url, symptom);
  }

  public getSymptomIdByUserId(id: any): Observable<any>{
    return this.http.get<any>(`${this.url}/user/${id}`);
  }

  public getSymptomById(id: number): Observable<Symptom>{
    return this.http.get<Symptom>(`${this.url}/${id}`);
  }

  public checkNumberOfSymptoms(userId: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/check/${userId}`);
  }
}
