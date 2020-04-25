import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-line-new',
    templateUrl: './App.LineComponent.html'
})
export class LineChartComponentNew {
    public lineChartType:string = 'line';

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


    @Input("chart-data")
    set NewChartData(_data: any) {
        var posdata = []
        _data.poslist.forEach(element => {
            posdata.push((+element).toFixed(1));
        });

        var negdata = []
        _data.neglist.forEach(element => {
            negdata.push((+element).toFixed(1));
        });

        this.lineChartData[0]['data'] = posdata.reverse();
        this.lineChartData[1]['data'] = negdata.reverse();
        this.lineChartLabels = _data.label.reverse();
    }

    constructor() { }
}