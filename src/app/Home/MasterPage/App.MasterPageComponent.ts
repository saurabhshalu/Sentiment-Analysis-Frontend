import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'main-app-root',
  templateUrl: './App.MasterPageComponent.html',
  styleUrls: ['./App.MasterPageComponent.css']
})

export class MasterPageComponent {
  title = 'Sentiment Analysis Of Tweets';

  constructor(public router: Router){}
}
