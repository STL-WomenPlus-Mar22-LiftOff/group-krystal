import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  user: User;
  users: User[] = [];
  constructor(private userService: UserService, 
              private router: Router, //connects component with URL
              private activatedRoute: ActivatedRoute ) { //provides access to info in this route/component pair such as path and URL params 
    this.user = new User;
    this.users = [];
  }

  ngOnInit(): void {
  }

  onSubmit(password: String, confirmPassword: String) {
    if(password === confirmPassword) {
      sessionStorage.setItem('username', 'password');
      this.userService.save(this.user).subscribe((result) => this.goToDashboard());
    }
 }

 goToDashboard() {
   this.router.navigate([`/dashboard`]);
 }

}
