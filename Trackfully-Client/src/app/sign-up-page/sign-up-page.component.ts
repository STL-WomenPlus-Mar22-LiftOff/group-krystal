import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user/user.service';
import { AutheticationService } from '../service/authentication/authetication.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  user: User;
  emailAvailable = true;

  // users: User[] = [];

  //same as landing page
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; //regex for email validation
  
  namePattern = "^[a-zA-Z]*" //regex for name verification

   
  constructor(private userService: UserService, 
    private router: Router, //connects component with URL
    private activatedRoute: ActivatedRoute ) { //provides access to info in this route/component pair such as path and URL params 
    this.user = new User; 
  }

  ngOnInit(): void {
  }

  //this previously routed to dashboard. Changed to symptom manage form as users will need to enter this after signing up
 goToSymptomManageForm() {
   this.router.navigate([`/symptom-manage-form`]); //when called will redirect to this URL path
 }

  onSubmit(password: String, confirmPassword: String) {

    // check if : password and confirmPassword are the same
    if(password === confirmPassword) {
      //sessionStorage.setItem('username', 'password'); // for later
      this.userService.save(this.user).subscribe((result) => this.goToSymptomManageForm());//this calls the save function in the user.service.ts file
      //to double check
      console.log("user registered successfully")
    } else { //if user registers incorrectly,
      this.router.navigate([`/`]);
      //to double check
      console.log("user not registered")
    }
  }

  checkEmail (email: String) {
    if (email != "") {
      this.userService.checkEmail(email).subscribe(result => this.emailAvailable = result);
    }
  }

}
