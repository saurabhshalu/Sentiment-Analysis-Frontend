import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ChartsModule } from 'ng2-charts';
import { WelcomeComponent } from './welcome/welcome.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { TweetComponent } from './tweet/tweet.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HeaderComponent } from './header/header.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PieChartComponent,
    TweetComponent,
    BarChartComponent,
    HeaderComponent,
    DoughnutComponent,
    LineChartComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
