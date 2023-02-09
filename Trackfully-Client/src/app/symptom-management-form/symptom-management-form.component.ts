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
  symptoms: String[];
  symptomNamePattern = "^[a-zA-Z].*[\s\.]*$";
  symptomId1: any;
  symptomId2: any;
  symptomId3: any;

  constructor(
    private symptomService: SymptomService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    this.symptom = new Symptom;
    this.user = new User;
    this.symptoms = [];
    this.symptomId1 = sessionStorage.getItem("symptomId1");
    this.symptomId2 = sessionStorage.getItem("symptomId2");
    this.symptomId3 = sessionStorage.getItem("symptomId3");
}

  ngOnInit(): void {
    this.populateSymptomArray();
    this.userService.getUserByUserID(this.getUserSessionId()).subscribe(result => this.user = result);
    this.checkNumberofSymptoms();
  }

  public checkNumberofSymptoms(): Boolean {
    this.symptomService.checkNumberOfSymptoms(this.getUserSessionId()).subscribe((result) => {
      if (result === true) {
        this.newSymptom = true;
        return true;
      } else {this.newSymptom = false; };
      return false;
    })
    return false;
  }

  populateSymptomArray() {
    if (this.symptomId1 !== "undefined") {
      this.symptomService.getSymptomById(parseInt(this.symptomId1)).subscribe(response => {this.symptoms.push(response.symptomName)});
     }
 
     if (this.symptomId2 !== "undefined") {
       this.symptomService.getSymptomById(parseInt(this.symptomId2)).subscribe(response => {this.symptoms.push(response.symptomName)});
      }
 
      if (this.symptomId3 !== "undefined") {
       this.symptomService.getSymptomById(parseInt(this.symptomId3)).subscribe(response => {this.symptoms.push(response.symptomName)});
      }
  }

  goToDashboard() {
    this.router.navigate([`/dashboard`]);
  }

  getUserSessionId() {
    let userId = sessionStorage.getItem("id");
    if (userId !== null) {
      this.user.id = userId;
    }
    return this.user.id;
  }

  setSymptomIDInSession(){
    this.symptomService.getSymptomIdByUserId(this.getUserSessionId()).subscribe((result) => {
      sessionStorage.setItem("symptomId1", result[0]);
      sessionStorage.setItem("symptomId2", result[1]);
      sessionStorage.setItem("symptomId3", result[2]);
    });
  }

    onSubmit(symptom: Symptom) {
     
      symptom.user = this.user; //assign logged in user to the symptom being saved
      console.log(typeof(this.user.id));
      this.symptomService.save(this.symptom).subscribe((result) => {
        this.setSymptomIDInSession();        
      });
      this.symptoms.push(symptom.symptomName);
    };
    
  } 


