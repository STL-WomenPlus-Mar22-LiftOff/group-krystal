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

  symptom: Symptom;
  user: User;
  symptomNamePattern = "^[a-zA-Z].*[\s\.]*$";

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
    // console.log(this.symptom.user.id);
  
  }

  goToDashboard() {
    this.router.navigate([`/dashboard`]); //when called will redirect to this URL path
  }

  getUserSessionId() {
    return sessionStorage.getItem("id");
  }
    setSymptomIDInSession(){
      this.symptomService.getSymptomIdByUserId(this.getUserSessionId()).subscribe((result) => {sessionStorage.setItem("symptomId", result.toString());});
    }
    

    onSubmit(symptom: Symptom) {
      symptom.user = this.user; //assign logged in user to the symptom being saved
      // console.log(this.symptom);
      this.symptomService.save(this.symptom).subscribe((result) => {
        this.setSymptomIDInSession();
        this.goToDashboard();
      });
      // console.log(this.symptom);
    };
    }
      
    

