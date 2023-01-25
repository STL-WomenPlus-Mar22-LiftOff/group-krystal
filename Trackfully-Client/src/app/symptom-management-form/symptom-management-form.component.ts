import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Symptom } from '../model/symptom';
import { SymptomService } from '../service/symptom/symptom.service';


@Component({
  selector: 'app-symptom-management-form',
  templateUrl: './symptom-management-form.component.html',
  styleUrls: ['./symptom-management-form.component.css']
})
export class SymptomManagementFormComponent implements OnInit {

  symptom: Symptom;
  constructor(
    private symptomService: SymptomService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    this.symptom = new Symptom;
}

  ngOnInit(): void {
    this.getUserSessionId();
    
    this.symptom.user.id = this.getUserSessionId() || ""; //added "" because symptom userID cannot be null, even though it is stored to user session ID, getting null error without or clause for empty string
    console.log(this.symptom.user.id);
  }

  goToTrackerForm() {
    this.router.navigate([`/daily-tracker-form`]); //when called will redirect to this URL path
  }

    getUserSessionId() {
      return sessionStorage.getItem("id");
    }
    

    //this should set symptom id in session storage when users make a new symptom. Cannot test currently as user id is not connected to symptom
      onSubmit(symptom: Symptom) {
        this.symptomService.save(this.symptom).subscribe((result) => {
          let userId = sessionStorage.getItem("id");
          this.symptomService.getSymptomIdByUserId(userId).subscribe((result) => {
          sessionStorage.setItem("symptomId", result.toString());
        });
        this.goToTrackerForm()}); //this calls the save function in the symptom.service.ts file
    };
    }
      
    

