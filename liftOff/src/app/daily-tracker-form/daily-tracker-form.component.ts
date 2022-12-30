import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-daily-tracker-form',
  templateUrl: './daily-tracker-form.component.html',
  styleUrls: ['./daily-tracker-form.component.css']
  
})
export class DailyTrackerFormComponent implements OnInit {

  currentDate = formatDate(new Date(), 'EEEE, MMMM d, y', 'en');

  constructor() { }

  ngOnInit(): void {
  }

}
