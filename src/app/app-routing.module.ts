import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TweetComponent } from './tweet/tweet.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';


const routes: Routes = [
  {
    path: 'bar',
    component: BarChartComponent
  },
  {
    path: 'tweet',
    component: TweetComponent
  },
  {
    path: '**',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
