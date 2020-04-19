import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
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
  public imagePath: any = null;
  public imagePath1: any = null;
  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  detailed_search() {
    if (this.hashtag.length==0 || this.dorm == "-1" || this.countofdorm=="0" || this.tweetcount=="0") {
      return
    }
    this.lineChartData = null;
    this.imagePath = null;
    this.imagePath1 = null;
    (<HTMLInputElement>document.getElementById("overlay")).style.display = "block";
    this.http.get('http://127.0.0.1:8000/reqres?hashtag=' + this.hashtag.replace('#','') + ' &type=1&dorm=' + this.dorm + '&countofdorm=' + this.countofdorm + '&tcount=' + this.tweetcount).subscribe((data: any[])=>{ 
    this.lineChartData = data; 
    this.newChartData = [this.lineChartData["positive"].toFixed(1), this.lineChartData["negative"].toFixed(1), (100 - (this.lineChartData["positive"] + this.lineChartData["negative"])).toFixed(1)];
    console.log(data);
    this.imagePath = this.domSanitizer.bypassSecurityTrustUrl(this.lineChartData['poswc']);
    this.imagePath1 = this.domSanitizer.bypassSecurityTrustUrl(this.lineChartData['negwc']);

    // this.http.get('./assets/data/imagetext.txt', { responseType: 'text' }).subscribe((imgdata: any)=>{
    //   this.imagePath = imgdata;
    //   console.log('image loaded...');
    // },
    // (imgerr: any[])=>{
    //   console.log(imgerr);
    // });

    (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
    },
    (err: any[])=>{
      console.log(err);
      (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
    })
  }
}
