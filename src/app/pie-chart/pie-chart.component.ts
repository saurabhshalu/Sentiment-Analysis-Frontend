import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() newPieChartData;
  public pieChartOptions: ChartOptions = {
    responsive: true,
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
  };
  public pieChartLabels: Label[] = [['Positive'], ['Negative'], ['Neutral']];
  public pieChartData: SingleDataSet = [1,1,1];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  // public pieChartBackgroundColor = [
  //   {
  //     backgroundColor: [
  //       'rgba(110, 114, 20, 1)',
  //       'rgba(118, 183, 172, 1)',
  //       'rgba(0, 148, 97, 1)'
  //     ],
  //     borderColor: 'black'
  //   }
  // ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.newPieChartData !== undefined || this.newPieChartData !==null) {
      this.pieChartData = this.newPieChartData;
      console.log("New chart value detected");
    }
    console.log('change detected');
  }

}
