import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  // public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;

  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];

  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012','2006', '2007', '2008', '2009', '2010', '2011', '2012','2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40], label: 'Series A' }, /* backgroundColor: "#00000"*/
    { data: [28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90,28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  hashtag: string = ''
  dorm: string = "-1"
  countofdorm: string = '0'
  tweetcount: string = '0'  

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  detailed_search() {
    if (this.hashtag.length==0 || this.dorm == "-1" || this.countofdorm=="0" || this.tweetcount=="0") {
      return
    }
    this.http.get('https://25d32100.ngrok.io/reqres?hashtag=' + this.hashtag.replace('#','') + ' &type=1&dorm=' + this.dorm + '&countofdorm=' + this.countofdorm + '&tweetcount=' + this.tweetcount).subscribe((data: any[])=>{ 
      //console.log('https://saurabh.localtunnel.me/reqres?hashtag=' + this.hashtag.replace('#','') + ' &days=' + this.tweetdays + '&countperday=' + this.tweetcount)
      this.barChartData = data;
      console.log(data);
    },
    (err: any[])=>{
      console.log(err);
    })
  }

  clickFn() {
    console.log("clicked");
    (<HTMLInputElement>document.getElementById("overlay")).style.display = "block";
  }

}
