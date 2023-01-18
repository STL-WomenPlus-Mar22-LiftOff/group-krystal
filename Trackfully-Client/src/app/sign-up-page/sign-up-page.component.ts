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

  onSubmit(password: String, confirmPassword: String) {
    console.log(this.user.name); 
    if(password === confirmPassword) {
      sessionStorage.setItem("loggedInUserId", `${this.user.id}`); // `this is a string ${}` - changed to string, doesn't like type int
      //sessionStorage.setItem('username', 'password'); // will need this later i assume
      this.userService.save(this.user).subscribe((result) => this.goToDashboard()); //this calls the save function in the user.service.ts file
    }
 }


}
