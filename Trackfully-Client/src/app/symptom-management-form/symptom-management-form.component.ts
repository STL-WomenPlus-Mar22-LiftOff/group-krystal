import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Symptom } from '../model/symptom';
import { User } from '../model/user';
import { SymptomService } from '../service/symptom/symptom.service';
import { UserService } from '../service/user/user.service';


@Component({
  selector: 'app-symptom-management-form',
  templateUrl: './symptom-management-form.component.html',
  styleUrls: ['./symptom-management-form.component.css']
})
export class SymptomManagementFormComponent implements OnInit {

  newSymptom: boolean = false;

  symptom: Symptom;
  user: User;
  // symptoms: Symptom[];

  constructor(
    private symptomService: SymptomService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    this.symptom = new Symptom;
    this.user = new User;
}

  ngOnInit(): void {
    this.getUserSessionId();
    let userIdNumber = parseInt(this.getUserSessionId() || "");
    this.userService.getUserByUserID(userIdNumber).subscribe(result => this.user = result);
    this.symptomService.checkNumberOfSymptoms(userIdNumber).subscribe((result) => {
      if (result === true) {
        this.newSymptom = true;
      } else {this.newSymptom = false;};
      // console.log("this is the result"+result);
    })
    // console.log(this.symptom.user.id);
    console.log(sessionStorage.getItem("symptomId1"));
    console.log(sessionStorage.getItem("symptomId2"));
    console.log(sessionStorage.getItem("symptomId3"));
  
  }

  goToDashboard() {
    this.router.navigate([`/dashboard`]); //when called will redirect to this URL path
  }

  getUserSessionId() {
    return sessionStorage.getItem("id");
  }
    setSymptomIDInSession(){
      this.symptomService.getSymptomIdByUserId(this.getUserSessionId()).subscribe((result) => {
        if (sessionStorage.getItem("symptomId1") == "undefined") {
          sessionStorage.setItem("symptomId", result[0]);
        } else if (sessionStorage.getItem("symptomId2") === "undefined") {
          sessionStorage.setItem("symptomId2", result[1]);
        } else if (sessionStorage.getItem("symptomId3") === "undefined") {
          sessionStorage.setItem("symptomId3", result[2]);
        }});
        console.log(sessionStorage.getItem("symptomId1"));
        console.log(sessionStorage.getItem("symptomId2"));
        console.log(sessionStorage.getItem("symptomId3"));
    }
    

    onSubmit(symptom: Symptom) {
      symptom.user = this.user; //assign logged in user to the symptom being saved
      // console.log(this.symptom);
      this.symptomService.save(this.symptom).subscribe((result) => {
        this.setSymptomIDInSession();
        // when creating the user's first symptom, chart does not load properly with this method call. Tried putting this method call in setSymptomIDInSession() - still has the issue
        this.goToDashboard();
      });
      // console.log(this.symptom);
    };
    }
      
    

