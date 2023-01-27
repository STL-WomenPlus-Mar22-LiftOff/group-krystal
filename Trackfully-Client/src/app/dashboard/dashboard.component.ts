import { Component, OnInit } from '@angular/core';
import { SymptomService } from '../service/symptom/symptom.service';
// import { User } from '../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private symptomService: SymptomService) { 

  }

  ngOnInit(): void {
    this.setSymptomIDInSession();
    // console.log("this is the session storage id "+sessionStorage.getItem("id"));
    // console.log("this is the session storage symptom "+sessionStorage.getItem("symptomId"));
    // console.log("dashboard name from session:"+sessionStorage.getItem("name"));
    // console.log("dashboard email from session: "+sessionStorage.getItem("email"));
  }
  setSymptomIDInSession(){
    let id = sessionStorage.getItem("id");
    this.symptomService.getSymptomIdByUserId(id).subscribe((result) => {sessionStorage.setItem("symptomId", result.toString());});
  }

}
