import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DailyEntry } from 'src/app/model/daily-entry';
import { Symptom } from 'src/app/model/symptom';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class DailyTrackerService {
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/symptom-tracker";
  }
  // httpOptions = {
  //   headers: new HttpHeaders({ 
  //     'Access-Control-Allow-Origin':'*',
  //     'Authorization':'authkey',
  //     'userid':'1'
  //   })
  // }

  public save(dailyEntry: DailyEntry) {
    return this.http.post<DailyEntry>(`${this.url}/add-daily`, dailyEntry);
  }

  getSymptomTrackerById(id: number): Observable<DailyEntry>{
    return this.http.get<DailyEntry>(`${this.url}/${id}`);
  }
  
}
