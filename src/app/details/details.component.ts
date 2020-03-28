import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  hashtag: string = '';
  dorm: string = "-1";
  countofdorm: string = '0';
  tweetcount: string = '0';  
  lineChartData: any = null;
  public newChartData: any = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  detailed_search() {
    if (this.hashtag.length==0 || this.dorm == "-1" || this.countofdorm=="0" || this.tweetcount=="0") {
      return
    }
    (<HTMLInputElement>document.getElementById("overlay")).style.display = "block";
    this.http.get('http://127.0.0.1:8000/reqres?hashtag=' + this.hashtag.replace('#','') + ' &type=1&dorm=' + this.dorm + '&countofdorm=' + this.countofdorm + '&tcount=' + this.tweetcount).subscribe((data: any[])=>{ 
     this.lineChartData = data; 
     this.newChartData = [this.lineChartData["positive"].toFixed(1), this.lineChartData["negative"].toFixed(1), (100 - (this.lineChartData["positive"] + this.lineChartData["negative"])).toFixed(1)];
      console.log(data);
      (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
    },
    (err: any[])=>{
      console.log(err);
      (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
    })
  }
}
