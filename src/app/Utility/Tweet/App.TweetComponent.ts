import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tweet-new',
    templateUrl: './App.TweetComponent.html'
})
export class TweetComponentNew {

    @Input() myurl: string = null;
    ngAfterViewInit() {
        // @ts-ignore
        twttr.widgets.load();
    }
}