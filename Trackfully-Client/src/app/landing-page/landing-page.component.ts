import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service'; //imports function from user service
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AutheticationService } from '../service/authetication.service';

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

  loginFailSuccess(results: any) {
    console.log(results);
    if (results.status === "success") {
      sessionStorage.setItem("email", this.email);
      this.router.navigate([`/symptom-manage-form`]);
    } else {
      console.log("failure");
    }
  }

  checkLogin() {
    this.loginservice.authenticate(this.user).subscribe((result) => {
      this.loginFailSuccess(result);
    },
    error => {
      console.log("Authentication Error");
    })
  } 

}
