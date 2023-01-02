import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; //imports function from user service


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [ UserService ]
})
export class LandingPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  //connects submit button function to get request
  loginUser(): void {
    this.userService.getUser();
  }
  

}
