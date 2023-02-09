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
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    namePattern = "^[a-zA-Z].*[\s\.]*$";
  pwHashPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$";

   
  constructor(private userService: UserService, private loginservice: AutheticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) {
    this.user = new User; 
  }

  //if user is already logged in reroutes to dashboard, so sign-up page is not visible 
  ngOnInit() {
    if(this.loginservice.isUserLoggedIn()){
      this.router.navigate(['/dashboard']);
   }
  }

  //this previously routed to dashboard. Changed to symptom manage form as users will need to enter this after signing up
 goToSymptomManageForm() {
   this.router.navigate([`/symptom-manage-form`]); //when called will redirect to this URL path
 }

 setSessionInformation(result: any) {
  //Added this new method, which sets the session with any needed user information from the back end. User information from the front end is stored in User object, and should only be used to send information to backend.
  sessionStorage.setItem("name", result.name);
  sessionStorage.setItem("email", result.email);
  sessionStorage.setItem("id",result.id.toString());
  this.goToSymptomManageForm();
 }

  // check if : password and confirmPassword are the same 
  //on submitting, front end user info from the form would be sent to the back end. Once that's completed, we will pull back end user information to the front and store in session.
  onSubmit(password: String, confirmPassword: String) {
    if(password === confirmPassword) {
      this.userService.save(this.user).subscribe((result) => this.userService.getUserInfo(this.user.email).subscribe((result) => this.setSessionInformation(result))); //this calls the save function in the user.service.ts file
      
    }
  }

  checkEmail (email: String) {
    if (email != "") {
      this.userService.checkEmail(email).subscribe(result => this.emailAvailable = result);
    }
  }

}
