import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutComponent } from './doughnut/doughnut.component';


const routes: Routes = [
  {
    path: 'bar',
    component: BarChartComponent
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
