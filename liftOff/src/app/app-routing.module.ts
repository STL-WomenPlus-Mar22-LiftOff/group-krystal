import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { SymptomManagementFormComponent } from './symptom-management-form/symptom-management-form.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DailyTrackerFormComponent } from './daily-tracker-form/daily-tracker-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserComponent } from './user/user.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ChartsComponent } from './charts/charts.component';


const appRoutes: Routes = [
  { path: 'home', 
    component: LandingPageComponent
  },

  { path: 'symptomManageForm', 
    component: SymptomManagementFormComponent
  },

  { path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'dailyTrackerForm',
    component: DailyTrackerFormComponent
  },

  {
    path: '',
    component:AppComponent
  },

  {
    path: 'test',
    component: TestComponent
  },

  {
    path: 'user',
    component: UserComponent
  },
  
  {
    path: 'signUp',
    component: SignUpPageComponent
  },
  {
    path: 'chart',
    component: ChartsComponent
  }
  // {
  //   path: 'what will show up on the URL aka the mapping',
  //   component: name of the component in angular formatted like above
  // }
];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
