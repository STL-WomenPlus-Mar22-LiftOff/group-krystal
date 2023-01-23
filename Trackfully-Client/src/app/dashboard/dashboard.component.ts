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
    // this.user = new User();
  }

  ngOnInit(): void {
    // console.log("dashboard id from session:"+sessionStorage.getItem("id"));
    // console.log("dashboard name from session:"+sessionStorage.getItem("name"));
    // console.log("dashboard email from session: "+sessionStorage.getItem("email"));
  }

}
