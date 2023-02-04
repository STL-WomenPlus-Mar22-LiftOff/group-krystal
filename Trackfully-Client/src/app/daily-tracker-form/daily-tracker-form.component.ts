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

  options:Options = {
    floor: 0,
    ceil: 10,
    step: 1,
    showTicks: true,
    showTicksValues: true
  };
  

  currentDate = formatDate(new Date(), 'EEEE, MMMM d, y', 'en');
  today = formatDate(new Date(), 'MM/dd/yyy', 'en');
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
      this.symptomInfo = new Symptom;
      this.availableSymptoms = {};
      this.symptomValues = Object.values;
      this.symptomId1 = sessionStorage.getItem("symptomId1");
      this.symptomId2 = sessionStorage.getItem("symptomId2");
      this.symptomId3 = sessionStorage.getItem("symptomId3");
      this.selectedSymptomId;
    }
 
    
  ngOnInit(): void {

    console.log(this.currentDate);
    console.log(this.today);


    if (this.symptomId1 !== "undefined") {
     this.symptomService.getSymptomById(parseInt(this.symptomId1)).subscribe(response => {this.availableSymptoms[`${this.symptomId1}`] = response.symptomName;});
    }

    if (this.symptomId2 !== "undefined") {
      this.symptomService.getSymptomById(parseInt(this.symptomId2)).subscribe(response => {this.availableSymptoms[`${this.symptomId2}`] = response.symptomName;});
      // this.symptomService.getSymptomById(parseInt(this.symptomId2)).subscribe(response => {this.availableSymptoms.push(response);});
     }

     if (this.symptomId3 !== "undefined") {
      this.symptomService.getSymptomById(parseInt(this.symptomId3)).subscribe(response => {this.availableSymptoms[`${this.symptomId3}`] = response.symptomName;});
     }
    // console.log(sessionStorage.getItem("symptomId1"));
    // console.log(sessionStorage.getItem("symptomId2"));
    // console.log(sessionStorage.getItem("symptomId3"));
    // console.log(this.availableSymptoms);
  }

  goToDashboard() {
    this.router.navigate([`/dashboard`]);
  }

  getSymptomByName (name: any) {
    return Object.keys(this.availableSymptoms).find(key => this.availableSymptoms[key] === name);
  }

  onSubmit(symptomName: any) {
    this.selectedSymptomId = this.getSymptomByName(symptomName);
    console.log("this is what is passed through:"+symptomName);
    console.log("this is the key"+this.selectedSymptomId);
    this.symptomService.getSymptomById(parseInt(this.selectedSymptomId)).subscribe((result) => {
        this.symptomInfo = result;
        this.dailyEntry.symptom = this.symptomInfo;
        this.dailyTrackerService.save(this.dailyEntry).subscribe((result) => this.goToDashboard()); 
      })   
  }

}
