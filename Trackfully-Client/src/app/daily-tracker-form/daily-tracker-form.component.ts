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

@Component({
  selector: 'app-daily-tracker-form',
  templateUrl: './daily-tracker-form.component.html',
  styleUrls: ['./daily-tracker-form.component.css'],
})
export class DailyTrackerFormComponent implements OnInit {

  currentDate = formatDate(new Date(), 'EEEE, MMMM d, y', 'en');
  dailyEntry: DailyEntry;
  symptomInfo: Symptom;
  availableSymptoms: Symptom [];
  symptomId1: any;
  symptomId2: any;
  symptomId3: any;

  constructor(private dailyTrackerService: DailyTrackerService,
              private symptomService: SymptomService,
              private authenticationService: AutheticationService,
              private userService: UserService,
              private router: Router) {
      this.dailyEntry = new DailyEntry;
      this.symptomInfo = new Symptom;
      this.availableSymptoms = [];
      this.symptomId1 = sessionStorage.getItem("symptomId1");
      this.symptomId2 = sessionStorage.getItem("symptomId2");
      this.symptomId3 = sessionStorage.getItem("symptomId3");
    }
 
    
  ngOnInit(): void {

    if (this.symptomId1 !== null) {
     this.symptomService.getSymptomById(parseInt(this.symptomId1)).subscribe(response => {this.availableSymptoms.push(response);});
    }

    if (this.symptomId2 !== null) {
      this.symptomService.getSymptomById(parseInt(this.symptomId2)).subscribe(response => {this.availableSymptoms.push(response);});
     }

     if (this.symptomId3 !== null) {
      this.symptomService.getSymptomById(parseInt(this.symptomId3)).subscribe(response => {this.availableSymptoms.push(response);});
     }
    console.log(sessionStorage.getItem("symptomId1"));
    console.log(sessionStorage.getItem("symptomId2"));
    console.log(sessionStorage.getItem("symptomId3"));
  }

  goToDashboard() {
    this.router.navigate([`/dashboard`]);
  }

  onSubmit(symptomId: string) {
    console.log(symptomId);
    this.symptomService.getSymptomById(parseInt(symptomId)).subscribe((result) => {
        this.symptomInfo;
        this.dailyEntry.symptom = this.symptomInfo;
        console.log(this.dailyEntry.symptom);
        this.dailyTrackerService.save(this.dailyEntry).subscribe((result) => this.goToDashboard()); 
      })   
  }

}
