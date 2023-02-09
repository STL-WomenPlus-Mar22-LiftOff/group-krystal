import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { SymptomService } from '../service/symptom/symptom.service';
import { AutheticationService } from '../service/authentication/authetication.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [ UserService ]

})

export class LandingPageComponent implements OnInit {
  isValidForm = true;
  
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  

  constructor(private router: Router, private loginservice : AutheticationService, private userService: UserService, private symptomService: SymptomService) {
    this.user = new User();
   }


//if user is already logged in reroutes to dashboard, so login/landing page is not visible 
  ngOnInit() {
    if(this.loginservice.isUserLoggedIn()){
      this.router.navigate(['/dashboard']);
   }
  }

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
      sessionStorage.setItem("name", result.name);
      sessionStorage.setItem("email", result.email);
      sessionStorage.setItem("id",result.id.toString());
      this.symptomService.getSymptomIdByUserId(result.id.toString()).subscribe((symptomResult) => {
        sessionStorage.setItem("symptomId1", symptomResult[0]);
        sessionStorage.setItem("symptomId2", symptomResult[1]);
        sessionStorage.setItem("symptomId3", symptomResult[2]);
        this.router.navigate([`/dashboard`]);
      });
  })}

  checkLogin() {
    this.loginservice.authenticate(this.user).subscribe((result) => {
      this.loginFailSuccess(result);
    },
      )
  } 
}
