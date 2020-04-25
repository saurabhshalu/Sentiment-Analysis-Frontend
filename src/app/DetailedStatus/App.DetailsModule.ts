import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailsComponentNew } from './App.DetailsComponent';
import { DetailsRoutes } from '../Routing/App.DetailsRouting';
import { LineChartComponentNew } from '../Utility/LineChart/App.LineComponent';
import { SharedModule } from '../Utility/App.SharedModule';

@NgModule({
  declarations: [
    DetailsComponentNew,
    LineChartComponentNew
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(DetailsRoutes),
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [DetailsComponentNew]
})
export class AppDetailsModule { }
