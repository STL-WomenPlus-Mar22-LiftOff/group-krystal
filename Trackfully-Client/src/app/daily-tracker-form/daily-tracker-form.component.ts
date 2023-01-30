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
import { User } from '../model/user';
import { UserService } from '../service/user/user.service';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-daily-tracker-form',
  templateUrl: './daily-tracker-form.component.html',
  styleUrls: ['./daily-tracker-form.component.css'],
})
export class DailyTrackerFormComponent implements OnInit {

  value: number = 5;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 0},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5},
      {value: 6},
      {value: 7},
      {value: 8},
      {value: 9},
      {value: 10}
    ]
  };

  currentDate = formatDate(new Date(), 'EEEE, MMMM d, y', 'en');
  dailyEntry: DailyEntry;
  symptomInfo: Symptom;

  constructor(private dailyTrackerService: DailyTrackerService,
              private symptomService: SymptomService,
              private authenticationService: AutheticationService,
              private userService: UserService,
              private router: Router) {
      this.dailyEntry = new DailyEntry;
      this.symptomInfo = new Symptom;
    }
 
    
  ngOnInit(): void {

    let symptomId = sessionStorage.getItem("symptomId");
    if (symptomId !== null) {
     this.symptomService.getSymptomById(parseInt(symptomId)).subscribe(response => this.symptomInfo = response);
    }
  }

  goToDashboard() {
    this.router.navigate([`/dashboard`]);
  }

  onSubmit() {
    this.dailyEntry.symptom = this.symptomInfo;
    this.dailyTrackerService.save(this.dailyEntry).subscribe((result) => this.goToDashboard()); 
  }

}
