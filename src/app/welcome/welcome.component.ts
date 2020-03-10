import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public searchtext : string;
  public resultdata: Object;
  public newPieChartData: any;

  ngOnInit() {
    this.resultdata = null;
    this.searchtext = '';
    this.newPieChartData = null;
  }
  onKeyDown(event: any) {
    if(this.searchtext.length === 0) {
      this.newPieChartData = null;
    }
    else {
      if(event.keyCode === 13 && this.searchtext.length !==0) {
        this.getdata()
      }
    }
  }
  getdata() {
    this.newPieChartData = null;
    //this.http.get('http://192.168.137.1:8000/reqres?hashtag=' + this.searchtext.replace('#','') + '&tcount=1000').subscribe((data: any[])=>{
    //this.http.get('./assets/data/db.json').subscribe((data: any[])=>{ 
    this.http.get('https://25d32100.ngrok.io/reqres?hashtag=' + this.searchtext.replace('#','')).subscribe((data: any[])=>{ 
      //console.log('https://saurabh.localtunnel.me/reqres?hashtag=lol&tcount=1000')
      this.resultdata = data;
      this.newPieChartData = [this.resultdata["positive"].toFixed(1), this.resultdata["negative"].toFixed(1), (100 - (this.resultdata["positive"] + this.resultdata["negative"])).toFixed(1)];
      console.log(data);
    },
    (err: any[])=>{
      console.log(err);
      this.resultdata = null;
    })
  }
}
