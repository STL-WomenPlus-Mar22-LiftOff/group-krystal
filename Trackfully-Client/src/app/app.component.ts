import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <app-navigation-bar></app-navigation-bar>
  
  <div class="content-outer-container">
    <div class="content-inner-container">
      <router-outlet></router-outlet>
    </div>
    <div class="footer-container">  
      <app-footer></app-footer>
    </div>
  </div>
  `,
  styles: [],
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
title = 'Trackfully';

}
   