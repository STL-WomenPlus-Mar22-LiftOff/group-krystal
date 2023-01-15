import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service'; //imports function from user service
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AutheticationService } from '../service/authentication/authetication.service';

// import {NgForm, FormGroup, FormControl, FormArray} from '@angular/forms';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [ UserService ]

})
export class LandingPageComponent implements OnInit {

  email ="";
  password ="";
  user: User;

  constructor(private router: Router, private loginservice : AutheticationService ) {
    this.user = new User();
   }


  ngOnInit() {}

  //checks to see if entries match user database
  loginFailSuccess(results: any) {
    console.log(results);
    if (results.status === "success") {
      sessionStorage.setItem("email", this.email);
      this.router.navigate([`/dashboard`]);
    } else {
      console.log("failure");
    }
  }

  //when submitting the form, will check to see if user email and password match in database.
  checkLogin() {
      this.loginservice.authenticate(this.user).subscribe((result) => {
      this.loginFailSuccess(result);
    },
    // this is in AroundTown but does not get called, and possibly is a duplicate funcitonality, so I've left it out
    // error => {
    //   console.log("Authentication Error");
    // }
      )
  } 

}
