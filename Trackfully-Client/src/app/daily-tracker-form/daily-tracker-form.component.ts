import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { DailyEntry } from '../model/daily-entry';
import { DailyTrackerService } from '../service/daily-tracker/daily-tracker.service';
import { AutheticationService } from '../service/authentication/authetication.service';
import { Symptom } from '../model/symptom';
import { SymptomService } from '../service/symptom/symptom.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-daily-tracker-form',
  templateUrl: './daily-tracker-form.component.html',
  styleUrls: ['./daily-tracker-form.component.css'],
})
export class DailyTrackerFormComponent implements OnInit {

  currentDate = formatDate(new Date(), 'EEEE, MMMM d, y', 'en');
  dailyEntry: DailyEntry;
  symptomInfo: Symptom;
  loggedInId: Object;
  constructor(private dailyTrackerService: DailyTrackerService,
              private symptomService: SymptomService,
              private authenticationService: AutheticationService,
              private router: Router) {
      this.dailyEntry = new DailyEntry;
      this.symptomInfo = new Symptom;
      this.loggedInId = new Object;
    }
  
  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      let email = sessionStorage.getItem("email");
      if (email != null) {
  
        this.authenticationService.getUserByEmail(email).subscribe((data) => {this.loggedInId = data, console.log(this.loggedInId);});
        // save the result from this call somehow and pass it to the line below,
      //this.symptomService.getSymptomById(loggedInUserId).subscribe(response => {this.symptomInfo = response;})
      }
    } else {this.router.navigate([`/`]);}
    //if user is logged in, get user id, 
    //use user id to find associated symptom id
    //rn uses hardcoded symptomId
    
  }

  goToDashboard() {
    this.router.navigate([`/dashboard`]);
  }

  onSubmit() {
    this.dailyEntry.symptom = this.symptomInfo;
    this.dailyTrackerService.save(this.dailyEntry).subscribe((result) => this.goToDashboard()); 
  }

}
