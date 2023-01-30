import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <app-navigation-bar></app-navigation-bar>
  
  <router-outlet></router-outlet>
  <!-- can eventually add a header <app-footer></app-footer> here -->
  `,
  styles: [],
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'Trackfully';

}
   