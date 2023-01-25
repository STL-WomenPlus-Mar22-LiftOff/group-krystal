import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { DailyEntry } from '../model/daily-entry';
import { DailyTrackerService } from '../service/daily-tracker/daily-tracker.service';
import { AutheticationService } from '../service/authentication/authetication.service';
import { Symptom } from '../model/symptom';
import { SymptomService } from '../service/symptom/symptom.service';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-daily-tracker-form',
  templateUrl: './daily-tracker-form.component.html',
  styleUrls: ['./daily-tracker-form.component.css'],
})
export class DailyTrackerFormComponent implements OnInit {

  currentDate = formatDate(new Date(), 'EEEE, MMMM d, y', 'en');
  dailyEntry: DailyEntry;
  symptomInfo: Symptom;
  userId = "";

  constructor(private dailyTrackerService: DailyTrackerService,
              private symptomService: SymptomService,
              private authenticationService: AutheticationService,
              private router: Router) {
      this.dailyEntry = new DailyEntry;
      this.symptomInfo = new Symptom;
    }
 
    
  ngOnInit(): void {
    let symptomId = sessionStorage.getItem("symptomId");
    console.log("daily tracker symptom id is"+symptomId);
    this.symptomService.getSymptomNamebySymptomId(symptomId).subscribe(response => { this.symptomInfo.symptomName = response.name});
    // if (this.authenticationService.isUserLoggedIn()) {
    //  let symptomId = sessionStorage.getItem("symptomId");
    // if (symptomId !== null) {
    //  this.symptomService.getSymptomNamebySymptomId(symptomId).subscribe(response => { console.log(response)});
    //  console.log("symptom name is: "+this.symptomInfo.symptomName);
    // }
    // } else {this.router.navigate([`/`]);}
  }


  goToDashboard() {
    this.router.navigate([`/dashboard`]);
  }

  onSubmit() {
    this.dailyEntry.symptom = this.symptomInfo;
    console.log("this is the symptom info"+this.symptomInfo);
    this.dailyTrackerService.save(this.dailyEntry).subscribe((result) => this.goToDashboard()); 

  }

}
