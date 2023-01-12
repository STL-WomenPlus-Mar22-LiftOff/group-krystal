import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  menuItems = [
    {linkId: 1, linkName: 'Dashboard', linkUrl: 'dashboard'},
    {linkId: 2, linkName: 'Daily Tracker', linkUrl: 'daily-tracker-form'}, 
    {linkId: 3, linkName: 'Sign Out'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
