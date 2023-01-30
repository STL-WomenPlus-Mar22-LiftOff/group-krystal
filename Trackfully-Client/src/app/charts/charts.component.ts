import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';
import {ChartService} from '../service/chart.service'
import { SymptomService } from '../service/symptom/symptom.service';
import { Symptom } from '../model/symptom';
import 'chartjs-adapter-date-fns';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {

  symptomInfo: Symptom;
  symptomLabel: String;
  userName: any;
  lastDate: any;
  firstDate: any;
  chartData: any;

constructor(private  chartService: ChartService, private symptomService: SymptomService) {
  Chart.register(...registerables);
  this.symptomInfo = new Symptom;
  this.symptomLabel = "data";
  this.userName = sessionStorage.getItem("name");
  this.lastDate = new Date(new Date().setDate(new Date().getDate()-30));
  this.firstDate = new Date(new Date().setDate(new Date().getDate()));
  }  

ngOnInit(): void {
  this.createChart();
  this.getTrackerData("symptomId1");
  this.getTrackerData("symptomId2");
  this.getTrackerData("symptomId3");
}

getTrackerData(storageKey: string) {
    let symptomId = sessionStorage.getItem(storageKey);
  if (symptomId) {
    this.symptomService.getSymptomById(parseInt(symptomId)).subscribe((result) => {
    if (symptomId) {
      this.chartService.getData(symptomId).subscribe((data: any) => {
      this.addData(this.chart,data,result.symptomName);
      console.log(data)
    })}
  });
};
}

  public chart: any;

  public addData(chart: Chart, data: any, label: any) {
    console.log(data)
    let chartData = [];

    for (let i = 0 ; i < data[0].length ; i++){
        chartData.push({
          x: data[0][i], y: data[1][i]
        });
    }
    console.log(chartData)

    chart.data.datasets.push({
        label: label,
        data: chartData,
        borderColor: "#519188",
        fill: false,
        pointBackgroundColor: "#344B47",
    });
    chart.update();
}

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        datasets: []
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