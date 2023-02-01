import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <app-navigation-bar></app-navigation-bar>
  
  <router-outlet></router-outlet>
  
  <app-footer></app-footer>
  `,
  styles: [],
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'Trackfully';

}
   