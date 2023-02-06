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
  displaySymptoms: String [];

  constructor(
    private symptomService: SymptomService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    this.symptom = new Symptom;
    this.user = new User;
    this.symptoms = [];
    this.displaySymptoms = [];
    this.symptomId1 = sessionStorage.getItem("symptomId1");
    this.symptomId2 = sessionStorage.getItem("symptomId2");
    this.symptomId3 = sessionStorage.getItem("symptomId3");
}

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe(
    //   params => {
    //     // this is called everytime the url changes
    //   }
    // )
    this.populateSymptomArray();
  
    this.getUserSessionId();
    let userIdNumber = parseInt(this.getUserSessionId() || "");
    this.userService.getUserByUserID(userIdNumber).subscribe(result => this.user = result);
   

    this.checkNumberofSymptoms();
    // console.log(this.symptom.user.id);
    // console.log(typeof(sessionStorage.getItem("symptomId1")));
    // console.log(sessionStorage.getItem("symptomId2"));
    // console.log(sessionStorage.getItem("symptomId3"));
  
  }

  public checkNumberofSymptoms(): Boolean {
    let userIdNumber = parseInt(this.getUserSessionId() || "");
    this.symptomService.checkNumberOfSymptoms(userIdNumber).subscribe((result) => {
      if (result === true) {
        this.newSymptom = true;
        return true;
      } else {this.newSymptom = false; };
      return false;
      // console.log("this is the result"+result);
    })
    return false;
  }

  populateSymptomArray() {
    if (this.symptomId1 !== "undefined") {
      this.symptomService.getSymptomById(parseInt(this.symptomId1)).subscribe(response => {this.symptoms.push(response.symptomName), this.displaySymptoms[0]=response.symptomName});
     }
 
     if (this.symptomId2 !== "undefined") {
       this.symptomService.getSymptomById(parseInt(this.symptomId2)).subscribe(response => {this.symptoms.push(response.symptomName), this.displaySymptoms[1]=response.symptomName});
       // this.symptomService.getSymptomById(parseInt(this.symptomId2)).subscribe(response => {this.availableSymptoms.push(response);});
      }
 
      if (this.symptomId3 !== "undefined") {
       this.symptomService.getSymptomById(parseInt(this.symptomId3)).subscribe(response => {this.symptoms.push(response.symptomName), this.displaySymptoms[2]=response.symptomName});
      }
      //console.log(this.symptoms);

  }

  goToDashboard() {
    this.router.navigate([`/dashboard`]); //when called will redirect to this URL path
  }

  getUserSessionId() {
    return sessionStorage.getItem("id");
  }

  setSymptomIDInSession(){
    this.symptomService.getSymptomIdByUserId(this.getUserSessionId()).subscribe((result) => {
      sessionStorage.setItem("symptomId1", result[0]);
      sessionStorage.setItem("symptomId2", result[1]);
      sessionStorage.setItem("symptomId3", result[2]);
    
      // console.log(sessionStorage.getItem("symptomId1"));
      // console.log(sessionStorage.getItem("symptomId2"));
      // console.log(sessionStorage.getItem("symptomId3"));
    });
  }

    onSubmit(symptom: Symptom) {
     
      symptom.user = this.user; //assign logged in user to the symptom being saved
      // console.log(this.symptom);
      console.log(typeof(this.user.id));
      this.symptomService.save(this.symptom).subscribe((result) => {
        this.setSymptomIDInSession();        
      });
      this.displaySymptoms.push(symptom.symptomName);
      // console.log(this.symptom);
    };
    
  } 


