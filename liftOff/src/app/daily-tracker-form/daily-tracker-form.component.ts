import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-tracker-form',
  templateUrl: './daily-tracker-form.component.html',
  styleUrls: ['./daily-tracker-form.component.css']
})
export class DailyTrackerFormComponent implements OnInit {

  date = Date.prototype.getDate();

  constructor() { }

  ngOnInit(): void {
  }

}
