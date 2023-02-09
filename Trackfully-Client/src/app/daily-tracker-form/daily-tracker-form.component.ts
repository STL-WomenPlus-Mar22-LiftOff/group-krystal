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
import { UserService } from '../service/user/user.service';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-daily-tracker-form',
  templateUrl: './daily-tracker-form.component.html',
  styleUrls: ['./daily-tracker-form.component.css'],
})
export class DailyTrackerFormComponent implements OnInit {

  options:Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };
  
  currentDate = formatDate((new Date().setDate(new Date().getDate())), 'yyyy-MM-dd', 'en');
  dailyEntry: DailyEntry;
  symptomInfo: Symptom;
  symptomValues = Object.values;
  availableSymptoms: any;
  symptomId1: any;
  symptomId2: any;
  symptomId3: any;
  selectedSymptomId: any;

  constructor(private dailyTrackerService: DailyTrackerService,
              private symptomService: SymptomService,
              private authenticationService: AutheticationService,
              private userService: UserService,
              private router: Router) {
      this.dailyEntry = new DailyEntry;
      this.dailyEntry.date = this.currentDate;
      this.symptomInfo = new Symptom;
      this.availableSymptoms = {};
      this.symptomValues = Object.values;
      this.symptomId1 = sessionStorage.getItem("symptomId1");
      this.symptomId2 = sessionStorage.getItem("symptomId2");
      this.symptomId3 = sessionStorage.getItem("symptomId3");
      this.selectedSymptomId;
    }
 
    
  ngOnInit(): void {
    if (this.symptomId1 !== "undefined") {
     this.symptomService.getSymptomById(parseInt(this.symptomId1)).subscribe(response => {this.availableSymptoms[`${this.symptomId1}`] = response.symptomName;});
    }

    if (this.symptomId2 !== "undefined") {
      this.symptomService.getSymptomById(parseInt(this.symptomId2)).subscribe(response => {this.availableSymptoms[`${this.symptomId2}`] = response.symptomName;});
     }

     if (this.symptomId3 !== "undefined") {
      this.symptomService.getSymptomById(parseInt(this.symptomId3)).subscribe(response => {this.availableSymptoms[`${this.symptomId3}`] = response.symptomName;});
     }
  }

  goToDashboard() {
    this.router.navigate([`/dashboard`]);
  }

  getSymptomByName (name: any) {
    return Object.keys(this.availableSymptoms).find(key => this.availableSymptoms[key] === name);
  }

  onSubmit(symptomName: any) {
    this.selectedSymptomId = this.getSymptomByName(symptomName);
    this.symptomService.getSymptomById(parseInt(this.selectedSymptomId)).subscribe((result) => {
        this.symptomInfo = result;
        this.dailyEntry.symptom = this.symptomInfo;
        this.dailyTrackerService.save(this.dailyEntry).subscribe((result) => this.goToDashboard()); 
      })   
  }

}
