import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  user: User;
   
  constructor(private userService: UserService, 
              private router: Router, //connects component with URL
              private activatedRoute: ActivatedRoute ) { //provides access to info in this route/component pair such as path and URL params 
    this.user = new User; 
  }

  ngOnInit(): void {
  
  }

 goToDashboard() {
   this.router.navigate([`/dashboard`]); //when called will redirect to this URL path
 }

 setSessionInformation(result: any) {
  sessionStorage.setItem("name", result.name);
  sessionStorage.setItem("email", result.email);
  sessionStorage.setItem("id",result.id.toString());
  this.goToDashboard();
 }

  onSubmit(password: String, confirmPassword: String) {
    if(password === confirmPassword) {
      this.userService.save(this.user).subscribe((result) => this.userService.getUserInfo(this.user.email).subscribe((result) => this.setSessionInformation(result))); //this calls the save function in the user.service.ts file
      
    }
 }

}
