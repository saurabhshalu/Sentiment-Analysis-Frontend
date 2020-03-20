import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public lineChartData: any = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Positive' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Negative' }
  ];
  public lineChartLabels: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 18,
        padding: 20
      },
      position: "bottom"
    },
    tooltips: {
      enabled: true,
      mode: "single",
      callbacks: {
        label: function(tooltipItem, data) {
          var allData = data.datasets[tooltipItem.datasetIndex].data;
          var tooltipLabel = data.datasets[tooltipItem.datasetIndex].label;
          var tooltipData = allData[tooltipItem.index];
          return tooltipLabel + ": " + tooltipData + "%";
        }
      }
    }
  }
  public lineChartType:string = 'line';

  lineChartColors: any[] = [
    { // grey
      borderColor: '#FFFFFF',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      borderColor: '#58cced',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
