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
  constructor(
    private symptomService: SymptomService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    this.symptom = new Symptom;
    this.user = new User;
}

  ngOnInit(): void {
    // this.getUserSessionId();
   
    // this.symptom.user.id = this.getUserSessionId() || ""; //added "" because symptom userID cannot be null, even though it is stored to user session ID, getting null error without or clause for empty string
    // console.log(this.symptom.user.id);
    let userIdNumber = parseInt(this.getUserSessionId() || "");
    this.userService.getUserByUserID(userIdNumber).subscribe(result => this.user = result);
    
  }

  goToTrackerForm() {
    this.router.navigate([`/daily-tracker-form`]); //when called will redirect to this URL path
  }

    getUserSessionId() {
      return sessionStorage.getItem("id");
    }

    setSymptomIDInSession(){
      this.symptomService.getSymptomIdByUserId(this.user.id).subscribe((result) => {sessionStorage.setItem("symptomId", result.toString());});
    }
    

    onSubmit(symptom: Symptom) {
      this.symptom.user = this.user; //assign logged in user to the symptom being saved
      this.symptomService.save(symptom).subscribe((result) => this.goToTrackerForm());
      this.setSymptomIDInSession();
    };
    }
      
    

