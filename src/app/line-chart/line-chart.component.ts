import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() newChartData;
  public lineChartOptions:any = {
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
    },
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
    {
      borderColor: '#FFFFFF',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      borderColor: '#58cced',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];

  public lineChartData: any = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Positive' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Negative' }
  ];
  
  public lineChartLabels: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.newChartData !== undefined && this.newChartData !==null) {
      this.lineChartData[0]['data'] = this.newChartData.poslist.reverse();
      this.lineChartData[1]['data'] = this.newChartData.neglist.reverse();
      this.lineChartLabels = this.newChartData.label.reverse();
      console.log("New chart value detected");
    }
  }

}
