import { Component } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './App.FeedbackComponent.html',
    styleUrls: ['./App.FeedbackComponent.css']
})
export class FeedbackComponentNew {
    constructor(private http: HttpClient) {}
    testSubmit() {
        const body1 = new HttpParams().set('form-name','contact').append('name','saurabh').append('email','saurabh111@gmail.com').append('message','here is test message');

        this.http.post('/', body1.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, responseType: 'text'}).subscribe(
          res => {
              alert(res);
          }
        );
    }
}