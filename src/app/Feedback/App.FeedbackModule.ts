import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeedbackRoutes } from '../Routing/App.FeedbackRouting';
import { FeedbackComponentNew } from './App.FeedbackComponent';

@NgModule({
  declarations: [
    FeedbackComponentNew
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FeedbackRoutes)
  ],
  providers: [
  ],
  bootstrap: [FeedbackComponentNew]
})
export class AppFeedbackModule { }
