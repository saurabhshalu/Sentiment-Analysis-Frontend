import { Component } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './App.FeedbackComponent.html',
    styleUrls: ['./App.FeedbackComponent.css']
})
export class FeedbackComponentNew {
    public name: string;
    public email: string;
    public url: string;
    public subject: string;
    constructor(private http: HttpClient) {}
    ngOnInit() {
        this.name = "";
        this.email = "";
        this.url = "";
        this.subject = "";
    }

    testSubmit() {
        const body1 = new HttpParams().set('form-name','contact')
        .append('name',this.name)
        .append('email',this.email)       
        .append('tweeturl',this.url)
        .append('subject',this.subject);

        this.http.post('/', body1.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, responseType: 'text'}).subscribe(
          res => {
              document.body.innerHTML = res;
          },
          err => {
              console.log(err);
          }
        );
    }
}