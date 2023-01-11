import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  menuItems = [
    {linkId: 1, linkName: 'Daily Tracker', linkUrl: 'symptomManageForm'}, 
    {linkId: 2, linkName: 'Sign Out'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
