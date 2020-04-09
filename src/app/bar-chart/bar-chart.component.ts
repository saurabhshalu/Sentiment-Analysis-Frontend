import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions: any = {
    scales: {
        xAxes: [{ 
          maxBarThickness: 10,
          ticks: {
              display: false
          }
        }],
        yAxes: [{
            margin: 10,
            ticks: {
                beginAtZero: true,
                display: false
            }
        }]
    },
  };


  public barChartLabels: any[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012','2006', '2007'];
  public barChartType: string = 'bar';

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 65, 59], label: 'Series A' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
