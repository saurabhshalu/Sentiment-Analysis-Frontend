import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
    templateUrl: './App.FeedbackComponent.html',
    styleUrls: ['./App.FeedbackComponent.css']
})
export class FeedbackComponentNew {
    constructor() {}
    testClick() {
        alert('test');
        //@ts-ignore
        document.getElementById('feedback-form').submit();
    }
}