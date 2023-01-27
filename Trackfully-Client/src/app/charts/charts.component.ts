import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';
import {ChartService} from './chart.service'
import { SymptomService } from '../service/symptom/symptom.service';
import { Symptom } from '../model/symptom';
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {

  symptomInfo: Symptom;
  symptomLabel: String = "data";
  userName: any;
  lastDate: any;
  firstDate: any;

constructor(private  chartService: ChartService, private symptomService: SymptomService) {
  Chart.register(...registerables);
  this.symptomInfo = new Symptom;
  }  

ngOnInit(): void {
  let symptomId = sessionStorage.getItem("symptomId");
  if (symptomId) {
    this.symptomService.getSymptomById(parseInt(symptomId)).subscribe((result) => {
      this.symptomInfo = result;
      this.symptomLabel = this.symptomInfo.symptomName;
  });
  this.chartService.getData(symptomId).subscribe((data: any) => {
    // console.log(data);
    this.createChart(data[0],data[1]);
  })
};
  this.userName = sessionStorage.getItem("name");
  this.lastDate = new Date(new Date().setDate(new Date().getDate()-30));
  this.firstDate = new Date(new Date().setDate(new Date().getDate()));
}

  public chart: any;

  createChart(dates: Array<String>, ratings: Array<String>){
  
    this.chart = new Chart("MyChart", {
      type: 'line',

      data: {
        labels: dates,
        datasets: [{
          label: this.symptomLabel.toString(),
          data: ratings,
          borderColor: "#519188",
          fill: false,
          pointBackgroundColor: "#344B47",
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              title: context => {
                console.log(context);
                const d = new Date(context[0].parsed.x);
                const formattedDate = d.toLocaleString([], {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour12: true
                });
                return formattedDate;
              }
            }
          },
          title: {
            display: true,
            text: `${this.userName}'s Symptoms for 30 Days`
          }
        },
        scales: {
          y: {
            min: 0,
            max: 10,
            grid: {
              display: false
            }
          },
          x: {
            grid: {
              display: false
            },
            type: 'time',
            time: {
              unit: 'day',
              displayFormats: {
                day: 'MMM dd'
              }
            },
            min: this.lastDate,
            max: this.firstDate
          }
        }
    }
  }
  );
  }
}
