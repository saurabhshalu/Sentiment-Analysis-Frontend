import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: './App.DetailsComponent.html',
    styleUrls: ['./App.DetailsComponent.css']
})
export class DetailsComponentNew {

    hashtag: string = '';
    dorm: string = "-1";
    countofdorm: string = '0';
    tweetcount: string = '0';  
    lineChartData: any = null;
    public newChartData: any = null;
    public imagePath: any = null;
    public imagePath1: any = null;

    constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

    detailed_search() {
        if (this.hashtag.length==0 || this.dorm == "-1" || this.countofdorm=="0" || this.tweetcount=="0") {
            return
        }
        this.lineChartData = null;
        this.imagePath = null;
        this.imagePath1 = null;
        (<HTMLInputElement>document.getElementById("overlay")).style.display = "block";
        //this.http.get('http://127.0.0.1:8000/reqres?hashtag=' + this.hashtag.replace('#','') + ' &type=1&dorm=' + this.dorm + '&countofdorm=' + this.countofdorm + '&tcount=' + this.tweetcount).subscribe((data: any[])=>{ 
        //this.http.get('https://sentiment-rest.herokuapp.com/reqres?hashtag=' + this.hashtag.replace('#','') + ' &type=1&dorm=' + this.dorm + '&countofdorm=' + this.countofdorm + '&tcount=' + this.tweetcount).subscribe((data: any[])=>{ 
        this.http.get('https://sentimentreply2.herokuapp.com/reqres?hashtag=' + this.hashtag.replace('#','') + ' &type=1&dorm=' + this.dorm + '&countofdorm=' + this.countofdorm + '&tcount=' + this.tweetcount).subscribe((data: any[])=>{ 
            this.lineChartData = data; 
            this.newChartData = [this.lineChartData["positive"].toFixed(1), this.lineChartData["negative"].toFixed(1), (100 - (this.lineChartData["positive"] + this.lineChartData["negative"])).toFixed(1)];
            console.log(data);
            this.imagePath = this.domSanitizer.bypassSecurityTrustUrl(this.lineChartData['poswc']);
            this.imagePath1 = this.domSanitizer.bypassSecurityTrustUrl(this.lineChartData['negwc']);
            (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
        },
        (err: any[])=>{
            (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
        })
    }
}