import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CoursesId1Component } from './courses-id1/courses-id1.component';
import { CoursesId3Component } from './courses-id3/courses-id3.component';
import { CoursesId2Component } from './courses-id2/courses-id2.component';
import { Project1Component } from './project1/project1.component';


const routes: Routes = [
  { path: 'courses', component: CoursesComponent, data: { animation: 'fadeAnimation' } },
  { path: 'home', component: HomeComponent, data: { animation: 'fadeAnimation' } },
  { path: '', component: HomeComponent, data: { animation: 'fadeAnimation' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'fadeAnimation' } },
  { path: 'projects/project1', component: Project1Component, data: { animation: 'fadeAnimation' } },
  { path: 'courses/id1', component: CoursesId1Component, data: { animation: 'fadeAnimation' } },
  { path: 'courses/id2', component: CoursesId2Component, data: { animation: 'fadeAnimation' } },
  { path: 'courses/id3', component: CoursesId3Component, data: { animation: 'fadeAnimation' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
