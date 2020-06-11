import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: './App.WelcomeComponent.html',
    styleUrls: ['./App.WelcomeComponent.css']
})
export class WelcomeComponentNew implements OnInit {

    constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

    public searchtext : string;
    public resultdata: any;
    public newChartData: any;
    public imagePath: any;
    public imagePath1: any;

    ngOnInit() {
        this.resultdata = null;
        this.searchtext = '';
        this.newChartData = null;
        this.imagePath = null;
        this.imagePath1 = null;
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
        //this.http.get('https://sentiment-rest.herokuapp.com/reqres?hashtag=' + this.searchtext.replace('#','')).subscribe((data: any[])=>{ 
        this.http.get('https://sentimentreply2.herokuapp.com/reqres?hashtag=' + this.searchtext.replace('#','')).subscribe((data: any[])=>{ 
            this.resultdata = data;
            this.imagePath = this.domSanitizer.bypassSecurityTrustUrl(this.resultdata['poswc']);
            this.imagePath1 = this.domSanitizer.bypassSecurityTrustUrl(this.resultdata['negwc']);
            this.newChartData = [this.resultdata["positive"].toFixed(1), this.resultdata["negative"].toFixed(1), (100 - (this.resultdata["positive"] + this.resultdata["negative"])).toFixed(1)];
            (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
        },
        (err: any[])=>{
            this.resultdata = null;
            (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
        });
    }
}