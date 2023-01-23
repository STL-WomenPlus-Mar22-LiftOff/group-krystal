import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChartService {

    private baseUrl:string; //backend endpoint
   
    constructor(private http: HttpClient) { 
      this.baseUrl = "http://localhost:8080/symptom-tracker";
    }
  
    getData(): Observable<Array<String>>{
      return this.http.get<Array<String>>(`${this.baseUrl}`);
    }
  
    public findAll(): Observable<Array<String>> {
      return this.http.get<Array<String>>(this.baseUrl);
   }

   }
  