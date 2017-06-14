﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomepageModule } from './homepage/homepage.module';
import { AddtagsModule } from './addtags/addtags.module';
import { MeetingModule } from './meeting/meeting.module';
import { MatsampModule } from './matsamp/matsamp.module';
import { FixasrModule } from './fixasr/fixasr.module';
import { VideoModule } from './video/video.module';
import { SharedModule } from './shared/shared.module';
//import { ProgramOptions } from './programOptions';

// Data passed in from index.html
import { AppData } from './appdata';

// Experiment with ng2-material-dropdown
//import { Ng2DropdownModule } from 'ng2-material-dropdown';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule,
     AboutModule, HomepageModule, AddtagsModule, MeetingModule,
      MatsampModule,
      FixasrModule,
      SharedModule.forRoot()
      //Ng2DropdownModule
      ],
  declarations: [AppComponent],
  providers: [AppData,
  {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
  {
    provide: AppData,
    useValue: window.APP_DATA
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
