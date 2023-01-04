import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }

  // ngOnInit() { //(this is from AroundTown)
  //   this.userService.getUser().subscribe(data => {
  //     this.users = data;})
  // }
}