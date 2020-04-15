import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

  public searchtext : string;
  public resultdata: Object;
  public newChartData: any;
  public imagePath: any;

  ngOnInit() {
    this.resultdata = null;
    this.searchtext = '';
    this.newChartData = null;
    this.imagePath = null;
  }
  onKeyDown(event: any) {
    if(this.searchtext.length === 0) {
      this.newChartData = null;
    }
    else {
      if(event.keyCode === 13 && this.searchtext.length !==0) {
        this.getdata()
      }
    }
  }
  getdata() {
    (<HTMLInputElement>document.getElementById("overlay")).style.display = "block";
    this.newChartData = null;
    //this.http.get('./assets/data/db.json').subscribe((data: any[])=>{ 
    //this.http.get('https://25d32100.ngrok.io/reqres?hashtag=' + this.searchtext.replace('#','')).subscribe((data: any[])=>{ 
    this.http.get('http://127.0.0.1:8000/reqres?hashtag=' + this.searchtext.replace('#','')).subscribe((data: any[])=>{ 
      console.log(data);
      this.resultdata = data;
      this.imagePath = this.domSanitizer.bypassSecurityTrustUrl(this.resultdata['poswc']);
      this.newChartData = [this.resultdata["positive"].toFixed(1), this.resultdata["negative"].toFixed(1), (100 - (this.resultdata["positive"] + this.resultdata["negative"])).toFixed(1)];
      (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
    },
    (err: any[])=>{
      console.log(err);
      this.resultdata = null;
      (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
    });
  }
  
}
