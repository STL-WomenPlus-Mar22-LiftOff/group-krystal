import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChartService {

    private baseUrl:string;
    
    constructor(private http: HttpClient) { 
      this.baseUrl = "http://localhost:8080/symptom-tracker";
    }
  
    getData(symptomId: String): Observable<Array<String>>{
      return this.http.get<Array<String>>(`${this.baseUrl}/data/${symptomId}`);
    }
  
    public findAll(): Observable<Array<String>> {
      return this.http.get<Array<String>>(this.baseUrl);
   }

   }
  