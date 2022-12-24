import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SymptomManagementFormComponent } from './symptom-management-form/symptom-management-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SymptomManagementFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
