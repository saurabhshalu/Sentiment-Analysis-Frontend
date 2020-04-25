import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { DoughnutComponentNew } from './Doughnut/App.DoughnutComponent';
import { TweetComponentNew } from './Tweet/App.TweetComponent';

@NgModule({
    declarations: [
        DoughnutComponentNew,
        TweetComponentNew
    ],
    imports: [ChartsModule],
    exports: [DoughnutComponentNew, TweetComponentNew, ChartsModule]
})

export class SharedModule { }