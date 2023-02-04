import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class QuotesService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/quote"
   }

   public getQuotes(): Observable<any> {
    return this.http.get<any>(`${this.url}/get`);
   }
}
