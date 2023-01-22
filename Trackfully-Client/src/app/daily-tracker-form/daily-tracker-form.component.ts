import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { DailyEntry } from '../model/daily-entry';
import { DailyTrackerService } from '../service/daily-tracker/daily-tracker.service';
import { AutheticationService } from '../service/authentication/authetication.service';
import { Symptom } from '../model/symptom';

@Component({
  selector: 'app-daily-tracker-form',
  templateUrl: './daily-tracker-form.component.html',
  styleUrls: ['./daily-tracker-form.component.css'],
})
export class DailyTrackerFormComponent implements OnInit {

  currentDate = formatDate(new Date(), 'EEEE, MMMM d, y', 'en');
  dailyEntry: DailyEntry;
  symptomInfo: Symptom;
  
  constructor(private dailyTrackerService: DailyTrackerService,
              private router: Router) {
      this.dailyEntry = new DailyEntry;
      this.symptomInfo = new Symptom;
    }
  ngOnInit(): void {
    //if(isUserLoggedIn())
    //if user is logged in, get user id, 
    //use user id to find associated symptom id
    this.dailyTrackerService.getSymptomById(55).subscribe(response => {this.symptomInfo = response;})
  }

  goToDashboard() {
    this.router.navigate([`/dashboard`]);
  }

  onSubmit(dateToday: String, symptLevel: Number, symptomInfo: Symptom) {
    console.log("onSubmit");
    console.log(this.dailyEntry);
    this.dailyEntry.symptom = symptomInfo;
    this.dailyTrackerService.save(this.dailyEntry).subscribe((result) => this.goToDashboard()); 
  }
}
