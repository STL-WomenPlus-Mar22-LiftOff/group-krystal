import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { formatDate } from '@angular/common';
import { DailyEntry } from '../model/daily-entry';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { DailyTrackerService } from '../service/daily-tracker/daily-tracker.service';

@Component({
  selector: 'app-daily-tracker-form',
  templateUrl: './daily-tracker-form.component.html',
  styleUrls: ['./daily-tracker-form.component.css']
  
})
export class DailyTrackerFormComponent implements OnInit {
  
  currentDate = formatDate(new Date(), 'EEEE, MMMM d, y', 'en');
  dailyEntry: DailyEntry;
  
  constructor( private dailyTrackerService: DailyTrackerService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.dailyEntry = new DailyEntry;
    }
  ngOnInit(): void {
    
  }

  goToDashboard() {
    this.router.navigate([`/dashboard`]);
  }

  onSubmit() {
    this.dailyEntry.dateToday = this.currentDate;
    //this.dailyEntry.symptLevel = this.trackerForm.value.selected_rating;
    console.log(this.dailyEntry.symptLevel); 
     this.dailyTrackerService.save(this.dailyEntry).subscribe((result) => this.goToDashboard()); //this calls the save function in the symptom.service.ts file
     
   }
}
