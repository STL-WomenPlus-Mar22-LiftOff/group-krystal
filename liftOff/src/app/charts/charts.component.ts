import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';
import {ChartService} from './chart.service'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {

  constructor(private  chartService: ChartService) {
    Chart.register(...registerables);
  }  

  ngOnInit(): void {
    this.chartService.getData().subscribe((data: any) => {
      console.log(data);
      this.createChart(data[0],data[1]);
    })
  }

  public chart: any;

  createChart(dates: Array<String>, ratings: Array<String>){
  
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'Testing Data Points',
          data: ratings,
          borderColor: "#3e95cd",
          fill: false
        }]
      },
      options: {
        responsive: true,
    }
  }
  );
  }
}
