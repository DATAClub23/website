import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ProjectsComponent } from './projects/projects.component';
import { CoursesId1Component } from './courses-id1/courses-id1.component';
import { CoursesId2Component } from './courses-id2/courses-id2.component';
import { CoursesId3Component } from './courses-id3/courses-id3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Project1Component } from './project1/project1.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CoursesComponent,
    ProjectsComponent,
    CoursesId1Component,
    CoursesId2Component,
    CoursesId3Component,
    Project1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
