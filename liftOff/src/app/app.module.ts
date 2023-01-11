import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SymptomManagementFormComponent } from './symptom-management-form/symptom-management-form.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { DailyTrackerFormComponent } from './daily-tracker-form/daily-tracker-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { FormsModule } from '@angular/forms';
import { ChartsComponent } from './charts/charts.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SymptomManagementFormComponent,
    TestComponent,
    DailyTrackerFormComponent,
    DashboardComponent,
    LandingPageComponent,
    UserComponent,
    SignUpPageComponent,
    ChartsComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
