import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  // template: `
  // <app-navigation-bar></app-navigation-bar>
  
  // <router-outlet></router-outlet>
  
  // <app-footer></app-footer>
  // `,
  template: `
  
  <app-navigation-bar></app-navigation-bar>
  
  <div id="page-container">
    <div id="content-wrap">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  </div>
  `,
  styles: [],
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'Trackfully';

}
   