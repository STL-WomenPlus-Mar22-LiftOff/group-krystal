import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DailyEntry } from 'src/app/model/daily-entry';


@Injectable({
  providedIn: 'root'
})
export class DailyTrackerService {
  private url: string;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/symptomtracker";
  }

  public save(dailyEntry: DailyEntry) {
    console.log(dailyEntry);
    return this.http.post<DailyEntry>(`${this.url}/add-daily`, dailyEntry);
  }
}
