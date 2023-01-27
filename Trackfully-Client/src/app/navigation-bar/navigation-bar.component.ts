import { Component, OnInit } from '@angular/core';
import { Event, RouterEvent, Router } from '@angular/router';
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
    {linkId: 3, linkName: 'Sign Out', linkUrl: 'logout'}
  ];

  loggedOutMenuItems = [
    {linkId: 1, linkName: 'Log In', linkUrl: ''},
    {linkId: 2, linkName: 'Register', linkUrl: 'sign-up'}, 
  ];

    userName : String = ""; 
    navBarType : String = "loggedIn";

  constructor(private authenticationService: AutheticationService, private router: Router) { }

//occuring way too many times
//need to fix toggle bar
  ngOnInit(): void {
    this.router.events.subscribe((event:Event)=> {this.checkNavBar()})
      
  //   this.router.events.pipe(
  //     filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
  //  ).subscribe((e: RouterEvent) => {
  //    {this.checkNavBar()});
      // if (this.authenticationService.isUserLoggedIn()) {
      //   this.userName = sessionStorage.getItem("name") || "";
      //   console.log("user name" + this.userName);
      //   this.navBarType = "loggedIn";
      //  } else {
      //    this.navBarType = "loggedOut";
      //  }
    // }
    }

checkNavBar() {
  if (this.authenticationService.isUserLoggedIn()) {
    this.userName = sessionStorage.getItem("name") || "";
    this.navBarType = "loggedIn";
   } else {
     this.navBarType = "loggedOut";
   }
}

}


// isUserLoggedIn() {
//   let user = sessionStorage.getItem('email');
//   console.log("logged in with " + user);
//   return !(user === null);
// }