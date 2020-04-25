import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MasterPageComponent } from './MasterPage/App.MasterPageComponent';
import { WelcomeComponentNew } from './WelcomePage/App.WelcomeComponent';

import { MainRoutes } from '../Routing/App.MainRouting';
import { SharedModule } from '../Utility/App.SharedModule';

@NgModule({
  declarations: [
    MasterPageComponent,
    WelcomeComponentNew
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes),
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class AppMainModule { }
