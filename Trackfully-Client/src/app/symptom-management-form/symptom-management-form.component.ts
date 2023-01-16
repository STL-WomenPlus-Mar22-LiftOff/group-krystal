import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Symptom } from '../model/symptom';
import { SymptomService } from '../service/symptom/symptom.service';
import { UserService } from '../service/user/user.service';
import { User } from '../model/user';


@Component({
  selector: 'app-symptom-management-form',
  templateUrl: './symptom-management-form.component.html',
  styleUrls: ['./symptom-management-form.component.css']
})
export class SymptomManagementFormComponent implements OnInit {

  symptom: Symptom;
  users: User[] = [];
  constructor(
    private symptomService: SymptomService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
    this.symptom = new Symptom;
}

  ngOnInit(): void {
  }

  goToTrackerForm() {
    this.router.navigate([`/daily-tracker-form`]); //when called will redirect to this URL path
  }

   onSubmit(symptom: Symptom) {
    console.log(symptom); 
    this.userService.getUser().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
    
    // symptom : { id: 0, name: "blah", userId: 34 } 

    // let currUser = this.userService.getUser(id) // current user
    // symptom.userId = currUser.id
    // symptom.userId = 188
    symptom.userId=188;
    
    // let currentUser = this.userService.getUserById(0);
    //need to still get the userId number by sharing data??
    // symptom.userId = currentUser.id;
    // symptom.userId = session.userId;
    

    this.symptomService.save(symptom).subscribe((result) => this.goToTrackerForm()); //this calls the save function in the symptom.service.ts file
     
   }

}
