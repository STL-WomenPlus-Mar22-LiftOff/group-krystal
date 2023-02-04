import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SymptomManagementFormComponent } from './symptom-management-form/symptom-management-form.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { DailyTrackerFormComponent } from './daily-tracker-form/daily-tracker-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { FormsModule } from '@angular/forms';
import { ChartsComponent } from './charts/charts.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AutheticationService } from './service/authentication/authetication.service';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SymptomManagementFormComponent,
    TestComponent,
    DailyTrackerFormComponent,
    DashboardComponent,
    LandingPageComponent,
    SignUpPageComponent,
    ChartsComponent,
    NavigationBarComponent,
    LogoutComponent,
    AboutPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSliderModule
  ],
  providers: [AuthGuardService, AutheticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
