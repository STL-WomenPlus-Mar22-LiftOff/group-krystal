import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Symptom } from '../model/symptom';
import { SymptomService } from '../service/symptom/symptom.service';
//importing UserService and User to send with post request
import { UserService } from '../service/user/user.service';
import { User } from '../model/user';


@Component({
  selector: 'app-symptom-management-form',
  templateUrl: './symptom-management-form.component.html',
  styleUrls: ['./symptom-management-form.component.css']
})
export class SymptomManagementFormComponent implements OnInit {

  symptom: Symptom;
  //added in user
  users: User [] = [];
  constructor(
    private symptomService: SymptomService,
    private userService: UserService, //added in userservice
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    this.symptom = new Symptom;
}

  ngOnInit(): void {
  }

  goToTrackerForm() {
    this.router.navigate([`/daily-tracker-form`]); //when called will redirect to this URL path
  }

  //  onSubmit(symptomName: String) {
  //   console.log(this.symptom.symptomName); 
  //    this.symptomService.save(this.symptom).subscribe((result) => this.goToTrackerForm()); //this calls the save function in the symptom.service.ts file
     
  //  }


    getUserSessionId() {
      return sessionStorage.getItem("loggedInUserId");
    }
    

  //instead should be just sending symptom (also changed in html file)
      onSubmit(symptom: Symptom) {
        this.getUserSessionId();
        console.log(this.getUserSessionId());
        console.log(symptom); 
        console.log("symptom User Id" + sessionStorage.getItem("loggedInUserId"));
        this.symptomService.save(this.symptom).subscribe((result) => this.goToTrackerForm()); //this calls the save function in the symptom.service.ts file
      };
    }
        // this.userService.getUser().subscribe((data: User[]) => {
        //   console.log(data);
        //   this.users = data;


    // symptom.userId=188;
    

