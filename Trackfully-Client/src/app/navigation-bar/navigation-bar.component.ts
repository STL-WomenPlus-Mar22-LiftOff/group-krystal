import { Component, OnInit } from '@angular/core';
import { Event, Router } from '@angular/router';
import { AutheticationService } from '../service/authentication/authetication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  loggedInMenuItems = [
    {linkId: 1, linkName: 'Dashboard', linkUrl: 'dashboard'},
    {linkId: 2, linkName: 'Daily Tracker', linkUrl: 'daily-tracker-form'}, 
    {linkId: 3, linkName: 'Manage Symptoms', linkUrl: 'symptom-manage-form'},
  ];

  loggedOutMenuItems = [
    {linkId: 1, linkName: 'Log In', linkUrl: ''},
    {linkId: 2, linkName: 'Register', linkUrl: 'sign-up'}, 
  ];

  signOutItem = [
    {linkId: 1, linkName: 'Sign Out', linkUrl: 'logout'}
  ]

    userName : String = ""; 
    navBarType : String = "loggedIn";

  constructor(private authenticationService: AutheticationService, private router: Router) { }

  ngOnInit(): void {
  //listens to change in routing (event) and calls checkNavBar appropriately when switching pages for logged in/out status
    this.router.events.subscribe((event:Event)=> {this.checkNavBar()});
  }

//checks to see if a user is logged in, if so use logged in nav bar
  checkNavBar() {
    if (this.authenticationService.isUserLoggedIn()) {
      this.userName = sessionStorage.getItem("name") || "";
      this.navBarType = "loggedIn";
    } else {
      this.navBarType = "loggedOut";
    }
  }

}