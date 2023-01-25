import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service'; //imports function from user service
import { Router } from '@angular/router';
import { User } from '../model/user';
import { SymptomService } from '../service/symptom/symptom.service';
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
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; //regex for email validation

  constructor(private router: Router, private loginservice : AutheticationService, private userService: UserService, private symptomService: SymptomService) {
    this.user = new User();
   }


  ngOnInit() {}
 //we need to do a get request to get user by ID from the database for the whole user object, once authentication is a success AND then set our sessionStorage based on database values NOT front end values- that's why we currently have a 0 for both user id and "" for a name...otherwise we will never be able to get our user id, symptom id's to align with our database
 //something like this but by ID from user service:
//  this.userService.getUser().subscribe((data: User[]) => {
//   console.log(data);
//   this.users = data;
// });

  //checks to see if entries match user database
  loginFailSuccess(results: any) {
    console.log("results: " + results.status);
    if (results.status === "success") {
      this.saveUserInfo();
      this.isValidForm = true;
    } else {
      this.router.navigate([`/`]);
      this.isValidForm = false;
    }
  }

  //Adjusted this to only use information about user directly sent from back end. Move routing to dashboard here to ensure data is set in session first before moving to dashboard
  saveUserInfo() {
    this.userService.getUserInfo(this.user.email).subscribe((result) => {
      //set everything in session storage
      sessionStorage.setItem("name", result.name);
      sessionStorage.setItem("email", result.email);
      sessionStorage.setItem("id",result.id.toString());
      this.symptomService.getSymptomIdByUserId(result.id.toString()).subscribe((symptomResult) => {
        sessionStorage.setItem("symptomId", symptomResult.toString());
      });
      this.router.navigate([`/dashboard`]); //should route to desktop for exisiting user
    //   console.log("login id from session:"+sessionStorage.getItem("id"));
    //   console.log("login name from session:"+sessionStorage.getItem("name"));
    //   console.log("login email from session: "+sessionStorage.getItem("email"));
  })}

  checkLogin() {
    this.loginservice.authenticate(this.user).subscribe((result) => {
      this.loginFailSuccess(result);
    },
      )
  } 


}
