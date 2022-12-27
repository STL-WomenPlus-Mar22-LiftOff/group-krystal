import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- can eventually add a header <app-header></app-header> here -->
  <router-outlet></router-outlet>
  <!-- can eventually add a header <app-footer></app-footer> here -->
  `,
  styles: []
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'liftOff';
}
