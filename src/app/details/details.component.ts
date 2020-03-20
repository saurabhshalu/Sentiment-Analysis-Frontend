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
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  detailed_search() {
    if (this.hashtag.length==0 || this.dorm == "-1" || this.countofdorm=="0" || this.tweetcount=="0") {
      return
    }
    this.http.get('http://127.0.0.1:8000/reqres?hashtag=' + this.hashtag.replace('#','') + ' &type=1&dorm=' + this.dorm + '&countofdorm=' + this.countofdorm + '&tcount=' + this.tweetcount).subscribe((data: any[])=>{ 

      this.lineChartData = data;
      console.log(data);
    },
    (err: any[])=>{
      console.log(err);
    })
  }
}
