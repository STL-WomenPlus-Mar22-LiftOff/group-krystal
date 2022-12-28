import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { SymptomManagementFormComponent } from './symptom-management-form/symptom-management-form.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

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
    path: '',
    component:AppComponent
  },
  {
    path: 'test',
    component: TestComponent
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
