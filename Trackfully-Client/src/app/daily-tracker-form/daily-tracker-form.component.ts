import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { DailyEntry } from '../model/daily-entry';
import { DailyTrackerService } from '../service/daily-tracker/daily-tracker.service';
import { AutheticationService } from '../service/authentication/authetication.service';
import { Symptom } from '../model/symptom';
import { SymptomService } from '../service/symptom/symptom.service';

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
              private symptomService: SymptomService,
              private router: Router) {
      this.dailyEntry = new DailyEntry;
      this.symptomInfo = new Symptom;
    }
  ngOnInit(): void {
    //if(isUserLoggedIn())
    //if user is logged in, get user id, 
    //use user id to find associated symptom id
    //rn uses hardcoded symptomId
    this.symptomService.getSymptomById(55).subscribe(response => {this.symptomInfo = response;})
  }

  goToDashboard() {
    this.router.navigate([`/dashboard`]);
  }

  onSubmit() {
    this.dailyEntry.symptom = this.symptomInfo;
    this.dailyTrackerService.save(this.dailyEntry).subscribe((result) => this.goToDashboard()); 
  }

}
