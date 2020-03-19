import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

  @Input() newChartData;

  public chartOptions: any = {
    elements: {
        arc: {
            borderWidth: 0
        }
    },
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 18,
        padding: 20
      },
      position: "bottom"
    },
    title: {
      text: "Whole Overview",
      fontColor: "white",
      fontSize: 22,
      padding: 20,
      display: true,
      position: "bottom"
    },
    tooltips: {
      enabled: true,
      mode: "single",
      callbacks: {
        label: function(tooltipItem, data) {
          var allData = data.datasets[tooltipItem.datasetIndex].data;
          var tooltipLabel = data.labels[tooltipItem.index];
          var tooltipData = allData[tooltipItem.index];
          return tooltipLabel + ": " + tooltipData + "%";
        }
      }
    }
  }

  public chartType: string = 'doughnut';
  public chartLabels: Array<string> = ['Positive', 'Negative', 'Neutral'];
  public chartData: any = [1, 1, 1];
  public chartColors: any[] = 
  [
      {
          backgroundColor: ['#1261a0','#3895d3','#58cced'],
          borderColor: '#072f5f'
      }
  ]
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.newChartData !== undefined || this.newChartData !==null) {
      this.chartData = this.newChartData;
      console.log("New chart value detected");
    }
  }

}
