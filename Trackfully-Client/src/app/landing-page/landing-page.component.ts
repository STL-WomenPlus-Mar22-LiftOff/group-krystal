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
  isValidForm = true;
  
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; //regex for email validation

  constructor(private router: Router, private loginservice : AutheticationService, private userService: UserService) {
    this.user = new User();
   }


  ngOnInit() {}
 //we need to do a get request to get user by ID from the database for the whole user object, once authentication is a success AND then set our sessionStorage based on database values NOT front end values- that's why we currently have a 0 for both user id and "" for a name...otherwise we will never be able to get our user id, symptom id's to align with our database
 //something like this but by ID from user service:
//  this.userService.getUser().subscribe((data: User[]) => {
//   console.log(data);
//   this.users = data;
// });

  loginFailSuccess(results: any) {
    console.log("results: " + results.status);
    if (results.status === "success") {
      this.saveUserInfo();
      this.router.navigate([`/symptom-manage-form`]); //should route to desktop for exisiting user
      this.isValidForm = true;
    } else {
      this.router.navigate([`/`]);
      this.isValidForm = false;
    }
  }

  saveUserInfo() {
    this.userService.getUserInfo(this.user.email).subscribe((result) => {
      this.user.email = result.email;
      this.user.name = result.name;
      this.user.id = result.id;
      sessionStorage.setItem("id", this.user.id.toString())});
      console.log(this.user);
      console.log(sessionStorage.getItem("id"));
      console.log(this.user.name);
      console.log(this.user.id);
  }

  checkLogin() {
    this.loginservice.authenticate(this.user).subscribe((result) => {
      this.loginFailSuccess(result);
    }
  ,
    error => {
      console.log("Authentication Error");
    })
}
  
}
