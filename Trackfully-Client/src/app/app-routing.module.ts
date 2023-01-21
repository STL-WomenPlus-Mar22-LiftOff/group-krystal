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
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AutheticationService } from './service/authentication/authetication.service';


const appRoutes: Routes = [
  { path: '', 
    component: LandingPageComponent
  },

  { path: 'symptom-manage-form', 
    component: SymptomManagementFormComponent,
    canActivate: [AuthGuardService]
  },

  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'daily-tracker-form',
    component: DailyTrackerFormComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'home',
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
    path: 'sign-up',
    component: SignUpPageComponent
  },
  {
    path: 'chart',
    component: ChartsComponent
  },

  {
    path: 'logout',
    component: LogoutComponent
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
