import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../service/authentication/authetication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  //need to create logged in menuItems: already exists but need to add Welcome <user> in html and access user name from session storage here
  //and logged out menuItems: need log in and register buttons
  loggedInMenuItems = [
    {linkId: 1, linkName: 'Dashboard', linkUrl: 'dashboard'},
    {linkId: 2, linkName: 'Daily Tracker', linkUrl: 'daily-tracker-form'}, 
    {linkId: 3, linkName: 'Sign Out', linkUrl: 'logout'}
  ];

  loggedOutMenuItems = [
    {linkId: 1, linkName: 'Log In', linkUrl: ''},
    {linkId: 2, linkName: 'Register', linkUrl: 'sign-up'}, 
  ];

    userName : String = ""; 
    navBarType : String = "loggedIn";

  constructor(private authenticationService: AutheticationService) { 
    
  }

//only occurring when refreshing the page? not with re-routing
  ngOnInit(): void {
      if (this.authenticationService.isUserLoggedIn()) {
       this.userName = sessionStorage.getItem("name") || "";
       console.log("user name" + this.userName);
       this.navBarType = "loggedIn";
      } else {
        this.navBarType = "loggedOut";
      }
    }
}


//see name in nav bar when logged in
//see log out vs log in when logged in/vs out
//route user to dashboard if try to go to localhost//4200