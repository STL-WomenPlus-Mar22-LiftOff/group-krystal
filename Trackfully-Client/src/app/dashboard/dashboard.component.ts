import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;
  // I don't think we need this currently?
  // user: User;

  constructor() { 
    this.user = user;
  }

  ngOnInit(): void {
    console.log("this is the user model :"+this.user.id)
    console.log("this is the user name :"+this.user.name)
    console.log("this is the user email :"+this.user.email)
    console.log("this is the session storage id"+sessionStorage.getItem("id"));
    // console.log("dashboard id from session:"+sessionStorage.getItem("id"));
    // console.log("dashboard name from session:"+sessionStorage.getItem("name"));
    // console.log("dashboard email from session: "+sessionStorage.getItem("email"));
  }

}
