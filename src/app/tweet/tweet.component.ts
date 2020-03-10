import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() myurl: string = null;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // @ts-ignore
    twttr.widgets.load();
  }

 // myurl = "https://twitter.com/sundarpichai/status/1234887183896461313";
}