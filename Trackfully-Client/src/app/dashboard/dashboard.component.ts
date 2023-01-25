import { Component, OnInit } from '@angular/core';
// import { User } from '../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // I don't think we need this currently?
  // user: User;

  constructor() { 

  }

  ngOnInit(): void {

    console.log("this is the session storage id"+sessionStorage.getItem("id"));
    console.log("this is the session storage symptom"+sessionStorage.getItem("symptomId"));
    // console.log("dashboard name from session:"+sessionStorage.getItem("name"));
    // console.log("dashboard email from session: "+sessionStorage.getItem("email"));
  }

}
