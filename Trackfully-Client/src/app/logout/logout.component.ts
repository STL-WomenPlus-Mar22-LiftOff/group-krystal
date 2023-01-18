import { Component, OnInit } from '@angular/core';
import { AutheticationService } from '../service/authentication/authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private autheticationService: AutheticationService, private router: Router) { }

  // when users log out, it will log them out and send them back to the landing page
  ngOnInit(): void {
    this.autheticationService.logOut();
    this.router.navigate(['']);
  }

}
