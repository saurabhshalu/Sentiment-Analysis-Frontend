import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DevelopersRoutes } from '../Routing/App.DevelopersRouting';
import { DeveloperComponentNew } from './App.DevelopersComponent';

@NgModule({
  declarations: [
    DeveloperComponentNew
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(DevelopersRoutes)
  ],
  providers: [
  ],
  bootstrap: [DeveloperComponentNew]
})
export class AppDevelopersModule { }
