import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-doughnut-new',
    templateUrl: './App.DoughnutComponent.html',
})
export class DoughnutComponentNew {


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


    @Input("chart-data")
    set NewChartData(_data: any) {
      this.chartData = _data;
    }

    constructor() { }
}