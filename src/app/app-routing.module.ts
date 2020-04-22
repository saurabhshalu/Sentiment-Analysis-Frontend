import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './details/details.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DevelopersComponent } from './developers/developers.component';


const routes: Routes = [
  {
    path: 'developers',
    component: DevelopersComponent
  },
  {
    path: 'bar',
    component: BarChartComponent
  },
  {
    path: 'details',
    component: DetailsComponent
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
