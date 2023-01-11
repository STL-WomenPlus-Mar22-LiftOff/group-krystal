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

  constructor(private symptomService: SymptomService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { 
    this.symptom = new Symptom;
  }

  ngOnInit(): void {
  }

  goToTrackerForm() {
    this.router.navigate([`/daily-tracker-form`]); //when called will redirect to this URL path
  }
 
   onSubmit(symptomName: string) {
     console.log(this.symptom.symptomName); 
     this.symptomService.save(this.symptom).subscribe((result) => this.goToTrackerForm()); //this calls the save function in the symptom.service.ts file
   }

}
