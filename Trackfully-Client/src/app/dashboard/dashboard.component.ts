import { Component, OnInit } from '@angular/core';
import { SymptomService } from '../service/symptom/symptom.service';
import { QuotesService } from '../service/quotes/quotes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  quotes: any;
  constructor(private symptomService: SymptomService, private quotesService: QuotesService) { 
    this.quotes;
  }

  getQuotes() {
    this.quotesService.getQuotes().subscribe((result) => {
      this.quotes = `"${result.q}" - ${result.a}`
    })
  }
  ngOnInit(): void {
    this.setSymptomIDInSession();
    this.getQuotes();
  }
  
  setSymptomIDInSession(){
    let id = sessionStorage.getItem("id");
    this.symptomService.getSymptomIdByUserId(id).subscribe((result) => {sessionStorage.setItem("symptomId", result.toString());});
  }

}
